import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch';
import { PHOTOS_GET } from '../../api';
import Error from '../error/Error';
import Loading from '../helper/Loading';
import FeedPhotosItem from './FeedPhotosItem';
import styles from './FeedPhotos.module.css'

const FeedPhotos = ({ setModalPhoto }) => {

    const { data, loading, error, request } = useFetch();

    console.log(data)

    useEffect(() => {
        async function fetchPhotos() {
            const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
            const { response, json } = await request(url, options);
        }
        fetchPhotos();
    }, [request]);

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