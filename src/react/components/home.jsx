import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function useMedia(query) {
    const [ matches, setMatches ] = useState(window.matchMedia(query).matches);
    
    useEffect(() => {
        let media = window.matchMedia(query);
        if (media.matches != matches) {
            setMatches(media);
        };
        let listener = () => setMatches(media.matches);
        media.addListener(listener);

        return () => media.removeListener(listener);
    }, [query])

    return matches
}

export const Home = () => {

    let massive = useMedia("(max-width: 1200px");
    let large = useMedia("(max-width: 800px");
    let medium = useMedia("(max-width: 500px)");
    let phone = useMedia("(max-width: 400px)")

    console.log(massive, large, medium, phone);

    return (
        <main>
            <p>Massive? {(massive) ? "Yes" : "Nope"}</p>
            <p>Large? {(large) ? "Yes" : "Nope"}</p>
            <p>Medium? {(medium) ? "Yes" : "Nope"}</p>
            <p>Phone? {(phone) ? "Yes" : "Nope"}</p>
        </main>
    )
};