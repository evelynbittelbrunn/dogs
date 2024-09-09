import React, { useContext, useEffect, useRef, useState } from 'react'
import { UserContext } from '../../contexts/UserContext'
import PhotoCommentsForm from './PhotoCommentsForm';
import styles from './PhotoComments.module.css'

const PhotoComments = (props) => {

    const [comments, setComments] = useState(() => props.comments);
    const commentsSection = useRef(null);

    // O usuário só comentar se estiver logado
    const { login } = useContext(UserContext);

    // Comportamento de dar scroll até os últimos comentários (mais recentes)
    // assim que a modal abrir ou quando um novo comentário for postado pelo usuário
    useEffect(() => {
        commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
    }, [comments]);

    return (
        <>
            <ul ref={commentsSection} className={`${styles.comments} ${props.single ? styles.single : ''}`}>
                {comments.map(comment => (
                    <li key={comment.comment_ID}>
                        <b>
                            {comment.comment_author}:
                            <span>{comment.comment_content}</span>
                        </b>
                    </li>
                ))}
            </ul>
            {login && (
                <PhotoCommentsForm
                    single={props.single}
                    id={props.id}
                    setComments={setComments}
                />)
            }
        </>
    )
}

export default PhotoComments