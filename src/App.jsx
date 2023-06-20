import React from 'react';
import { Routes, Route } from 'react-router-dom';

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

export const App = () => {

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
