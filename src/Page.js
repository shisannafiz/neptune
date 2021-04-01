import React, { useState, useEffect } from 'react';
import axios from './axios';
import Video from './Video';
import './Page.css';

const base_url = 'https://image.tmdb.org/t/p/original/';

function Page({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, [fetchUrl]);

  return (
    <div class="page">
      <h2 class="page__title">{title}</h2>
      <div className="page__videos">
        {movies.map((movie) => (
          <Video
            key={movie.id}
            image={`${base_url}${movie.backdrop_path}`}
            title={movie.name}
            rating={movie.vote_average}
            length="1 Season"
            year={movie.first_air_date}
          />
        ))}
      </div>
    </div>
  );
}

export default Page;
