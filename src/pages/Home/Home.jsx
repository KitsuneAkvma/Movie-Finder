import React from 'react';

import { Loader } from 'components/Loader/Loader';
import { StyledHome } from './Home.styled';

import useFetch from 'hooks/useFetch';
import { Link } from 'react-router-dom';

const API_KEY = 'ff7d39b257d83d6457e06be28e08ca81';
const API_URL = `https://api.themoviedb.org/3`;
export function Home() {
  const { data, loading, error } = useFetch(`${API_URL}/trending/movie/week?api_key=${API_KEY}`);

  const trendingMovies = data?.results;

  if (loading) return <Loader />;
  if (error) console.log({ error });

  return (
    <StyledHome>
      <h1>Trending this week:</h1>

      <ul>
        {trendingMovies?.map(movie => {
          return (
            <li className='movie' key={movie.id}>
              {' '}
              <Link to={`movies/${movie.id}`} state={movie.id}>
                <img
                  width="300px"
                  height="400px"
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt={movie.original_title}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </StyledHome>
  );
}
