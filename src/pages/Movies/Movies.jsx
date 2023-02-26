import React from 'react';

import { Link } from 'react-router-dom';
import { StyledMovies } from './Movies.styled';
import useFetch from 'hooks/useFetch';
import { Loader } from 'components/Loader/Loader';

const API_KEY = 'ff7d39b257d83d6457e06be28e08ca81';
const API_URL = `https://api.themoviedb.org/3`;

export function Movies() {
  let { data, loading, error, refetch } = useFetch(
    `${API_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${''}`
  );

  const searchResults = data?.results;
  console.log({ searchResults });

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form[0];
    refetch(`${API_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${input.value}`);
  };

  if (loading) return <Loader />;
  if (error) console.log({ error });
  
  return (
    <StyledMovies>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search for a movie . . . " />
      </form>
      <ul>
        {searchResults?.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`${movie.id}`} state={movie.id}>
                <img
                  width="300px"
                  height="400px"
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt={`${movie.original_title} Poster`}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </StyledMovies>
  );
}
