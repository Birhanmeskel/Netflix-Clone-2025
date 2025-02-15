import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import requests from "../../utils/requests";
import "./banner.css";
const Banner = () => {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);

        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (err) {
        console.log("error", err);
      }
    };
    fetchData()
  }, []);
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + " ..." : str;
  };

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">{movie?.name || movie?.original_name}</h1>
        <div className="banner_buttons">
          <button className="banner_button play">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner_fadeBottom" />
    </div>
  );
};

export default Banner;
