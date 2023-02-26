import { Loader } from 'components/Loader/Loader';
import useFetch from 'hooks/useFetch';
import React from 'react';

import { Link, Outlet, useLocation } from 'react-router-dom';
import { StyledMoviesDetails } from './MoviesDetails.styled';

const API_KEY = 'ff7d39b257d83d6457e06be28e08ca81';
const API_URL = `https://api.themoviedb.org/3`;

export function MovieDetails() {
  const location = useLocation();
  const { data, loading, error } = useFetch(`${API_URL}/movie/${location.state}?api_key=${API_KEY}&language=en-US`);

  const movie = data;

  if (loading) return <Loader />;

  if (error) console.log({ error });

  return (
    <StyledMoviesDetails>
      {' '}
      <h1>{movie?.title}</h1>
      <h4>
        <span className="bold-text">Original Title:</span> {movie?.original_title}
      </h4>
      <h2>
        <span className="bold-text">Release date:</span> {movie?.release_date}
      </h2>
      <img
        src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
        alt="Movie Poster"
        width={500}
        height={800}
      />{' '}
      <ul className="genres" aria-label="Movie genres">
        {movie?.genres.map(genre => {
          return (
            <li key={genre.id} className="genre">
              {genre.name}
            </li>
          );
        })}
      </ul>
      <div className="description" aria-label="Movie description">
        {movie?.overview}
      </div>
      <nav>
        <li className="navigation-item">
          <Link to="cast" state={location.state}>
            Cast
          </Link>
        </li>
        <li className="navigation-item">
          <Link to="reviews" state={location.state}>
            Reviews
          </Link>
        </li>
      </nav>
      <Outlet />
    </StyledMoviesDetails>
  );
}
