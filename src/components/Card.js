import React from 'react';

const Card = ({ title, year, image, imdbRating }) => {
  if (title.legth > 15) {
    title = title.substr(0, 15) + '...';
  }

  return (
    <div className="card">
      <h2 className="title">
        {title.length > 15 ? title.trim().substr(0, 15) + '...' : title}
      </h2>
      <p className="year">{year}</p>
      <img src={image} alt={title} className="card-image" />
      <p className="imdb-rating">{imdbRating}</p>
    </div>
  );
};

export default Card;
