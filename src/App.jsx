import React, { useEffect, useState } from 'react';
import { Link, Routes, Route, NavLink } from 'react-router-dom';
import axios from 'axios';
//-----Assets
import GlobalStyle from './assets/GlobalStyles.styled';
import { Container } from './components/Container/Container.styled';
//-----Pages
import { Navbar } from 'components/Nav/Navbar';
import { Home } from './pages/Home/Home';
import { Movies } from './pages/Movies/Movies';
import { MovieDetails } from './pages/MovieDetails/MovieDetails';
import { Cast } from './pages/MovieDetails/Cast/Cast';
import { Reviews } from './pages/MovieDetails/Reviews/Reviews';

import { NotFound } from './pages/Errors/NotFound/NotFound';
//-----Hooks
import useFetch from 'hooks/useFetch';
import { Loader } from 'components/Loader/Loader';

///// Element's global variables /////
const API_KEY = 'ff7d39b257d83d6457e06be28e08ca81';
const API_URL = `https://api.themoviedb.org/3`;

export const App = () => {
  /// States ///
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState('batman');

  const [currentPage, setCurrentPage] = useState(1);

  // const { data, loading, error } = useFetch(
  //   `${API_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${filter}&page=${currentPage}`
  // );

  // if (loading) return <Loader />;
  // if (error) console.log({ error });

  return (
    <>
      <GlobalStyle />
      <Container className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies">
            <Route index element={<Movies />} />
            <Route path=":id" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
