import React, { useEffect, useState } from 'react'

const useMedia = (media) => {

    const [match, setMatch] = useState(null);

    useEffect(() => {
        function changeMatch() {
            const { matches } = window.matchMedia(media);
            setMatch(matches);
        }
        // Possibilita que seja responsivo assim que faz login
        // Antes só tinha responsividade se mudasse o tamanho da página
        changeMatch();
        window.addEventListener('resize', changeMatch);
        return () => {
            window.removeEventListener('resize', changeMatch);
        }
    }, [media]);

    return match;
}

export default useMedia