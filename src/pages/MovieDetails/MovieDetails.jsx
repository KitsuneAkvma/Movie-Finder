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
  const originalTitle = movie?.original_title;
  const releaseDate = movie?.release_date;
  const poster = movie?.poster_path;
  const posterPlaceholder = 'https://www.altavod.com/assets/images/poster-placeholder.png';
  const rating = Math.round(movie?.vote_average);
  const tagline = movie?.tagline;
  const productionCompanies = movie?.production_companies.map(company => {
    return [company.name];
  });
  const productionCountries = movie?.production_countries.map(country => {
    return [country.name];
  });
  const homepage = movie?.homepage;

  if (loading) return <Loader />;

  if (error) console.log({ error });

  console.log({ data });

  return (
    <StyledMoviesDetails>
      {' '}
      <h1>{movie?.title}</h1>
      <h4>
        <span className="span--bold-text">Original Title:</span> {originalTitle}
      </h4>
      <h2>
        <span className="span--bold-text">Release date:</span> {releaseDate}
      </h2>
      <div className="movie__wrapper">
        <img
          src={poster !== null ? `https://image.tmdb.org/t/p/original/${poster}` : posterPlaceholder}
          alt="Movie Poster"
          width={500}
          height={800}
        />{' '}
        <aside className="movie__details">
          <div className="movie__details__rating">
            {' '}
            <h3 className="movie__info__label">Rating</h3>
            <p className="movie__details__rating__content">
              <span className="span--rating">{rating}</span> / 10
            </p>
            {tagline !== '' && <q className="movie__details__tagline">{tagline}</q>}
          </div>
          {Array.isArray(productionCompanies) && productionCompanies?.length !== 0 && (
            <div className="movie__details__companies">
              {' '}
              <h3 className="movie__info__label">Companies</h3>
              <p className="movie__details__companies__content">{productionCompanies.join(', ')}</p>
            </div>
          )}
          {Array.isArray(productionCountries) && productionCountries?.length !== 0 && (
            <div className="movie__details__countries">
              {' '}
              <h3 className="movie__info__label">Production Countries</h3>
              <p className="movie__details__countries__content">{productionCountries.join(', ')}</p>
            </div>
          )}{' '}
          {homepage && (
            <div className="movie__details__homepage">
              {' '}
              <h3 className="movie__info__label">Homepage</h3>
              <a href={homepage} className="movie__details__homepage__content">
                {homepage}
              </a>
            </div>
          )}
        </aside>
      </div>
      <ul className="movie__genres" aria-label="Movie genres">
        {movie?.genres.map(genre => {
          return (
            <li key={genre.id} className="movie__genres__item">
              {genre.name}
            </li>
          );
        })}
      </ul>
      <div className="movie__overview">
        {' '}
        <h3 className="movie__info__label">Overview</h3>
        <div className="movie__overview__content" aria-label="Movie description">
          {movie?.overview}
        </div>
      </div>
      <nav>
        <li className="navigation__item">
          <Link to="cast" state={location.state}>
            Cast
          </Link>
        </li>
        <li className="navigation__item">
          <Link to="reviews" state={location.state}>
            Reviews
          </Link>
        </li>
      </nav>
      <Outlet />
    </StyledMoviesDetails>
  );
}
