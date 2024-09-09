import React, { useEffect, useState } from 'react'
import FeedPhotos from './FeedPhotos'
import FeedModal from './FeedModal'
import PropTypes from 'prop-types';

const Feed = ({ user }) => {

    const [modalPhoto, setModalPhoto] = useState(null);
    const [pages, setPages] = useState([1]);
    const [infinite, setInfinite] = useState(true);

    useEffect(() => {
        let wait = false;
        function infiniteScroll() {
            if (infinite) {
                // Total de scroll dado
                const scroll = window.scrollY;
                // Total da altura da página
                const height = document.body.offsetHeight - window.innerHeight;
                if (scroll > height * 0.75 && !wait) {
                    setPages((pages) => [...pages, pages.length + 1]);
                    wait = true;
                    // Timeout para voltar o wait para falso depois de 500 milissegundos
                    // Isso ajuda para a requisição não ser chamada toda hora, pois a condição depende do wait
                    setTimeout(() => {
                        wait = false;
                    }, 500);
                }
            }
        }

        window.addEventListener('wheel', infiniteScroll);
        window.addEventListener('scroll', infiniteScroll);
        return () => {
            window.removeEventListener('wheel', infiniteScroll);
            window.removeEventListener('scroll', infiniteScroll);
        }
    }, [infinite]);

    return (
        <div>
            {modalPhoto && <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />}
            {pages.map(page => (
                <FeedPhotos
                    key={page}
                    user={user}
                    page={page}
                    setModalPhoto={setModalPhoto}
                    setInfinite={setInfinite}
                />
            ))}
        </div>
    )
}

Feed.defaultProps = {
    user: 0,
}

Feed.propTypes = {
    user: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired
    ])
}

export default Feed