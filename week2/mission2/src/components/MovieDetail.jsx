import React from 'react';
import './MovieDetail.css';

export default function MovieDetail({ movie: { title, overview } }) {
  return (
    <div className='movie-detail'>
      <div className='detail-title'>{title}</div>
      <div className='overview'>{overview}</div>
    </div>
  );
}
