import React, { useContext } from 'react'
import styles from './PhotoContent.module.css'
import { Link } from 'react-router-dom';
import PhotoComments from './PhotoComments';
import { UserContext } from '../../contexts/UserContext';
import PhotoDelete from './PhotoDelete';
import Image from '../helper/Image';

const PhotoContent = ({ data, single }) => {

    const { photo, comments } = data;
    const user = useContext(UserContext);

    return (
        <div className={`${styles.photo} ${single ? styles.single : ''}`}>
            <div className={styles.img}>
                <Image src={photo.src} alt={photo.title} />
            </div>
            <div className={styles.details}>
                <div>
                    <p className={styles.author}>
                        {/* Verifica se o usuário é o autor da postagem para que possa deletar */}
                        {user.data && (user.data.username === photo.author ?
                            <PhotoDelete id={photo.id} /> :
                            <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
                        )}
                        <span className={styles.preview}>{photo.acessos}</span>
                    </p>
                </div>
                <h1 className='title'>
                    <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
                </h1>
                <ul className={styles.attributes}>
                    <li>{photo.peso} kg</li>
                    <li>{photo.idade > 1 ? 'anos' : 'ano'}</li>
                </ul>
            </div>
            <PhotoComments single={single} id={photo.id} comments={comments} />
        </div>
    )
}

export default PhotoContent