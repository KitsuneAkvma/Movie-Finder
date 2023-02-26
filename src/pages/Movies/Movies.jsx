import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { StyledMovies } from './Movies.styled';
import useFetch from 'hooks/useFetch';
import { Loader } from 'components/Loader/Loader';

const API_KEY = 'ff7d39b257d83d6457e06be28e08ca81';
const API_URL = `https://api.themoviedb.org/3`;

export function Movies() {
  const [currentPage, setCurrentPage] = useState(0);
  const [filter, setFilter] = useState('');
  const { data, loading, error, refetch } = useFetch(
    `${API_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${''}`
  );
  const searchResults = data?.results;
  const totalPages = data?.total_pages;
  const posterPlaceholder = 'https://www.altavod.com/assets/images/poster-placeholder.png';
  console.log({ data });

  // const handleSearch = e => {
  //   refetch(`${API_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${filter}&page=${currentPage}`);
  // };
  const handleNewSearch = e => {
    e.preventDefault();
    setCurrentPage(1);
  };
  const handleChange = e => {
    const input = e.currentTarget;
    setFilter(input.value);
  };
  const handleLoadMore = e => {
    setCurrentPage(prev => prev + 1);
  };
  useEffect(() => {
    refetch(`${API_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${filter}&page=${currentPage}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  if (loading) return <Loader />;
  if (error) console.log({ error });

  return (
    <StyledMovies>
      <form onSubmit={handleNewSearch}>
        <input type="text" placeholder="Search for a movie . . . " onChange={handleChange} />
      </form>
      <ul>
        {searchResults?.map(movie => {
          return (
            <li className="movie" key={movie.id}>
              <Link to={`${movie.id}`} state={movie.id}>
                <img
                  width="300px"
                  height="400px"
                  src={
                    movie.poster_path !== null
                      ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                      : posterPlaceholder
                  }
                  alt={`${movie.original_title} Poster`}
                  title={movie.title}
                  className="movie__poster"
                />
              </Link>
            </li>
          );
        })}
      </ul>
      {searchResults?.length !== 0 && currentPage !== totalPages && (
        <button type="button" className="button--load-more" onClick={handleLoadMore}>
          NEXT PAGE
        </button>
      )}
    </StyledMovies>
  );
}
