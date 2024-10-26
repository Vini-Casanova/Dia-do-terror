import React from "react";
import '../styles/Movies.css'
import Menu from "../components/Menu";
import FlipTicket from "../components/Ticket";

const movies = [
    {
        link: "https://m.media-amazon.com/images/M/MV5BN2NkZWQyNzgtNGIzZC00YjFkLWFkZGQtNTU0OGI5ODYxODA1XkEyXkFqcGc@._V1_.jpg",
        year: "1997",
        title: "Funny Games",
        description: `Two violent young men take a mother, father, and son hostage in their vacation cabin and force them to play sadistic "games" with one another for their own amusement.`,
        front_ticket: "/funny_frente.svg",
        back_ticket: "/funnygames_verso.svg"    
    },
    {
        link: "https://m.media-amazon.com/images/M/MV5BMGUyNmY5MGQtN2FjNC00MmY0LTk5NWMtYzZiMGYzNGMxYWEyXkEyXkFqcGc@._V1_.jpg",
        year: "1974",
        title: "Black Christmas",
        description: `During their Christmas break, a group of sorority girls are stalked by a stranger.`,
        front_ticket: "/Blackchristmas-frente.svg",
        back_ticket: "/black_atras.svg"
    },
    {
        link: "https://m.media-amazon.com/images/M/MV5BYTA3NDU5MWEtNTk4Yy00ZDNkLThmZTQtMjU3ZGVhYzAyMzU4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        year: "1982",
        title: "The Thing",
        description: `A research team in Antarctica is hunted by a shape-shifting alien that assumes the appearance of its victims.`,
        front_ticket: "/thething_frente.svg",
        back_ticket: "/thething_verso.svg"
    }
]

const Teste2 = () => {
    return (
        <>
            <div className="ticket-header">
                                
                                <h1>Seus Ingressos:</h1>
                            </div>
            <div class="container">
                {/* <div class="cover-flow"> */}
                    {
                        // movies.map(poster => (
                        //     <>
                        <FlipTicket tickets={movies} />
                        //     </>
                        // )
                        // )
                    }

                {/* </div> */}
            </div>

            <Menu />
        </>
    );
}

export default Teste2;


// https://images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/4c335374aaec5abcb80cbf3f/Untitled1.png