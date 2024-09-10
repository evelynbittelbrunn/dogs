import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch';
import { PHOTOS_GET } from '../../api';
import Error from '../error/Error';
import Loading from '../helper/Loading';
import FeedPhotosItem from './FeedPhotosItem';
import styles from './FeedPhotos.module.css'

const FeedPhotos = ({ page, user, setModalPhoto, setInfinite }) => {

    const { data, loading, error, request } = useFetch();

    useEffect(() => {
        async function fetchPhotos() {
            const total = 6;
            const { url, options } = PHOTOS_GET({ page, total, user });
            const { response, json } = await request(url, options);

            // Verifica se veio menos imagens que o total
            // Subentende-se que acabaram as postagens e não precisa mais fazer requisição
            if (response && response.ok && json.length < total) setInfinite(false);
        }
        fetchPhotos();
    }, [request, user, page]);

    if (error) return <Error error={error} />
    if (loading) return <Loading />
    if (data) return (
        <ul className={`${styles.feed} animeLeft`}>
            {data.map(photo => <FeedPhotosItem key={photo.id} photo={photo} setModalPhoto={setModalPhoto} />)}
        </ul>
    )
    else return null;
}

export default FeedPhotos