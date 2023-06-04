import { useState, useEffect } from "react";



// try {
//     const result = await fetch("https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=01790ccf15009eb7a989e72f1922775f&hash=cf8f687890fc10deb7e3e77a382e6324")
//     let resultJSON = await result.json()
//     console.log(resultJSON)
// } catch (error) {
    
// }


export function HerosWrap() {
    const [heros, setHeros] = useState([]);
    useEffect(() => {
        fetchHero();
    }, []);

    async function fetchHero() {
        fetch(
            "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=01790ccf15009eb7a989e72f1922775f&hash=cf8f687890fc10deb7e3e77a382e6324"
        )
            .then((response) => response.json())
            .then((json) => {
                let herosResults = [];
                for (const hero of json.data.results) {
                    let urlHero = hero.urls[0].url;
                    let altHero = hero.name;
                    let idHero = hero.id;

                    let thumbnailHero = hero.thumbnail.path;
                    let extensionHero = hero.thumbnail.extension;
                    let imageHero = thumbnailHero + "." + extensionHero;
                    herosResults.push({
                        urlHero,
                        altHero,
                        idHero,
                        imageHero,
                    });
                }
                setHeros(herosResults);
            })
            .catch((error) => console.error(error));
    }
    
    return (
        <main>
            {heros &&
                heros.map(({ idHero, altHero, imageHero, urlHero }) => (
                    <div className="hero-container" key={idHero}>
                        <h1>{altHero}</h1>
                        <img src={imageHero} alt={altHero} />
                        <a href={urlHero} target="_blank">{altHero} Wiki</a>
                    </div>
                ))}
        </main>
    );
}
