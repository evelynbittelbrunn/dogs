import React, { useContext, useState } from 'react'
import { UserContext } from '../../contexts/UserContext'
import PhotoCommentsForm from './PhotoCommentsForm';
import styles from './PhotoComments.module.css'

const PhotoComments = (props) => {

    const [comments, setComments] = useState(() => props.comments);

    // O usuário só comentar se estiver logado
    const { login } = useContext(UserContext);

    return (
        <>
            <ul className={styles.comments}>
                {comments.map(comment => (
                    <li key={comment.comment_ID}>
                        <b>
                            {comment.comment_author}:
                            <span>{comment.comment_content}</span>
                        </b>
                    </li>
                ))}
            </ul>
            {login && <PhotoCommentsForm id={props.id} setComments={setComments} />}
        </>
    )
}

export default PhotoComments