import React, {useState, useEffect} from 'react';
import instance from '../axios';
import '../App.css';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = props => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        async function fetchData(){
            const request = await instance.get(props.fetchUrl);
            setMovies(request.data.results)
            return;
        }
        fetchData();
    },[props.fetchUrl])

    const opts = {
        height: "390",
        width: "640",
        playerVars: {
            //https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    const handleClick = movie => {
        if(trailerUrl) {
            setTrailerUrl("");
        }
        else {
            movieTrailer(movie?.name || movie?.title || "")
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get("v"))
                }).catch((error) => console.log(error))
        }
    }

    return(
        <div className="row">
        <h2>{props.title}</h2>
            
            <div className="row_posters">
                {/* container -> posters */}
                {movies.map((item, k) => {
                    return <img 
                    onClick={() => handleClick(item)}
                    key={item.id} 
                    className={`row_poster ${props.isLargeRow && "row_posterLarge"}`}
                    src={`${base_url}${props.isLargeRow ? item.poster_path : item.backdrop_path}`} 
                    alt={item.name}/>
                })}
            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
            


        </div>
    );
}

export default Row;