import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

import GlobalStyle from '../themes/GlobalStyles.styled';
import { Container } from './Container/Container.styled';

import { Home } from './Home';
import { Movies } from './Movies';
import { MovieDetails } from './MovieDetails';
import { Cast } from './MovieDetails/Cast';
import { Reviews } from './MovieDetails/Reviews';

///// Element's global variables /////
const API_KEY = 'ff7d39b257d83d6457e06be28e08ca81';
const API_URL = `https://api.themoviedb.org/3`;

export const App = () => {
  /// States ///
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState('batman');

  const [currentPage, setCurrentPage] = useState(1);

  const fetchData = (keyword, page) => {
    axios(
      API_URL + `/search/movie?api_key=${API_KEY}` + `&language=en-US` + `&query=${keyword}` + `&page=${page}`
    ).then(async result => {
      console.log(result.data);
    });
  };
  fetchData(filter, currentPage);
  return (
    <>
      <GlobalStyle />
      <Container className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />}>
            <Route path="movieID" element={<MovieDetails />}>
              {' '}
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </Container>
    </>
  );
};

export default App;
