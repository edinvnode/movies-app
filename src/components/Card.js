import React from 'react';

//adda tooltip
import Tooltip from './Tooltip';

const Card = ({ title, year, image, imdbRating, genre }) => {
  if (title.legth > 15) {
    title = title.substr(0, 15) + '...';
  }

  return (
    <div className="card">
      <Tooltip text={genre}>
        <h2 className="title" title={title}>
          {title.length > 15 ? title.trim().substr(0, 15) + '...' : title}
        </h2>
        <p className="year">Year published: {year}</p>
        <div className="image-container">
          <img src={image} alt={title} className="card-image" />
        </div>
        <p className="imdb-rating">imDB Rating: {imdbRating}</p>
      </Tooltip>
    </div>
  );
};

export default Card;
