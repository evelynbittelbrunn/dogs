import React, { useState } from 'react'
import Enviar from '../../assets/enviar.svg?react'
import useFetch from '../../hooks/useFetch';
import { COMMENT_POST } from '../../api';
import Error from '../error/Error';

const PhotoCommentsForm = ({ id, setComments }) => {

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
        <form onSubmit={handleSubmit}>
            <textarea
                value={comment}
                id={comment}
                name={comment}
                placeholder='Comente aqui :)'
                onChange={({ target }) => setComment(target.value)}
            />
            <button>
                <Enviar />
            </button>
            <Error error={error} />
        </form>
    )
}

export default PhotoCommentsForm