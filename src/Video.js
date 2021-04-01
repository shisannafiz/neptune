import React from 'react';
import './Video.css';

const base_url = 'https://image.tmdb.org/t/p/original/';

function Video({ image, title, rating, length, year }) {
  return (
    <div>
      <div className="video">
        <img className="video__thumbnail" src={image} alt="" />
        <div className="video__info">
          <div className="video__text">
            <h4>{title}</h4>
            <p>
              {length} • {year} • {rating}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
