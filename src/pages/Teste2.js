import React from "react";
import '../styles/Test2.css'

const movies = [
    {
        link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_pstiBncn1oI8_aLBNs8eAkLDPwS4Ff1ghrKLsYuZrlE0DN43x74OIi1KYMniqLL8iFY&usqp=CAU",
        year: "1984",
        title: "A Nightmare on Elm Street",
        description: "Several young people in a small town regularly have nightmares in which they are chased by a man deformed by fire and wearing a glove ending in sharp blades."
    },
    {
        link: "https://upload.wikimedia.org/wikipedia/en/a/af/Halloween_%281978%29_theatrical_poster.jpg",
        year: "1978",
        title: "Halloween",
        description: `Little Michael Myers murders his sister on Halloween night in 1963, for which
					he is committed to a mental institution. Six years later, Myers escapes from the hospital and
					returns to his hometown of Haddonfield, Illinois.`
    },
    {
        link: "https://m.media-amazon.com/images/I/5109-e8TSyL.jpg",
        year: "1996",
        title: "Scream",
        description: `A serial killer, wearing a mask and a black costume, spreads panic among the
					teenagers of a Californian town.`
    },
    {
        link: "https://filmartgallery.com/cdn/shop/files/Bram-Stokers-Dracula-Vintage-Movie-Poster-Original-1-Sheet-27x41_1024x1024.jpg?v=1698383228",
        year: "1992",
        title: "Bram Stoker's Dracula",
        description: `Before becoming a vampire, Count Dracula was Prince Vlad who, upon learning
					of the death of his beloved, sold his soul to the devil.`
    }
]

const Teste2 = () => {
    return (
        <div class="container">
            <div class="cover-flow">
                {
                    movies.map(poster => (
                        <div class="movie-cover">
                            <img src={poster.link} class="cover-img" alt={poster.title}/>
                            <div class="movie-info">
                                <p class="year">{poster.year}</p>
                                <h2 class="title">{poster.title}</h2>
                                <p class="description">{poster.description}</p>
                            </div>
                        </div>
                    )
                    )
                }
            </div>
        </div>
    );
}

export default Teste2;