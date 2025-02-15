import React, { useEffect, useState } from "react";
import "./row.css";
import axios from "../../../utils/axios";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movie, setMovie] = useState([]);
  //   const [trailerUrl, setTrailerUrl] = useState("");

  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.get(`${fetchUrl}`);

        setMovie(request.data.results);
      } catch (error) {
        console.error("error", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row_posters">
        {movie?.map((movie, index) => (
          <img
            key={index}
            // onClick={()=>setTrailerUrl(movie.id)}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
