import React, { useState } from 'react'
import Enviar from '../../assets/enviar.svg?react'
import useFetch from '../../hooks/useFetch';
import { COMMENT_POST } from '../../api';
import Error from '../error/Error';
import styles from './PhotoCommentsForm.module.css'

const PhotoCommentsForm = ({ id, setComments, single }) => {

    const { request, error } = useFetch();
    const [comment, setComment] = useState(null);

    async function handleSubmit(event) {
        event.preventDefault();
        const { url, options } = COMMENT_POST(id, { comment });
        const { response, json } = await request(url, options);

        // Varificando se o comentário foi postado para que possa incluir na lista de comentários
        if (response.ok) {
            // Limpando textarea
            setComment('');
            setComments((comments) => [...comments, json])
        }
    }

    return (
        <form
            className={`${styles.form} ${single ? styles.single : ''}`}
            onSubmit={handleSubmit}
        >
            <textarea
                value={comment === null ? '' : comment}
                id={comment}
                name={comment}
                className={styles.textarea}
                placeholder='Comente aqui :)'
                onChange={({ target }) => setComment(target.value)}
            />
            <button className={styles.button}>
                <Enviar />
            </button>
            <Error error={error} />
        </form>
    )
}

export default PhotoCommentsForm