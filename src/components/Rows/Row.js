import React,{useState,useEffect} from 'react'
import axios from '../contants/axios';
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/"

function Row({ title, fetchUrl , isLargeRow}) {

const [movies,setMovies] = useState([]);
const [trailetUrl,setTrailetUrl] = useState("");

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[fetchUrl])

    const opts = {
        height: "490",
        width: "100%",
        payerVars: {
            autoplay:1
        }
    }
const handleClick = (movie) => {
    if (trailetUrl){
        setTrailetUrl('');
    } else {
        movieTrailer(movie?.name || "")
        .then((url) => {
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailetUrl(urlParams.get('v'));
        })
        .catch((error) => console.log(error))
    }
}
    return (
        <div className="row">
            <h2>{title}</h2>
        <div className="row_posters">
            { /*severals row poster */ }
            {movies.map(movie => (
                <img 
                key={movie.id}
                onClick={() => handleClick(movie)}
                className={`row_poster ${isLargeRow && "row_posterLarge"}`} 
                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                alt={movie.name}/>
            ))}
        </div> 
        {trailetUrl && <YouTube videoId={trailetUrl} opts={opts}/> }          
        </div>
    )
}

export default Row
