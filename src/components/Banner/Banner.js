import React,{useState,useEffect} from 'react'
import axios from '../contants/axios';
import requests from '../contants/requests';
import './Banner.css';

function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.lenght - 1)
                ]
            );
            return request;
        }
        fetchData();
    },[]);

    function truncate(str, n) {
        return str?.lenght > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <header className="banner"
        style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "center center"
        }}>
            <div className="banner__contents">
                <h1 className="banner__title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <div className="banner__description">
                    {truncate(movie?.description,150)}
                </div>
                {/* div + 2 buttons */}
                {/* Descriptions */}
            </div>
           <div className="banner__fadeBottom"/>
        </header>
    )
}

export default Banner
