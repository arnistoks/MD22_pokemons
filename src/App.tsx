import React from 'react';
import './App.scss';
import {
  BrowserRouter as
  Router, NavLink, Route, Routes,
} from 'react-router-dom';
import Ball from './images/ball.png';
import Logo from './images/pokemon.png';
import HomePage from './pages/HomePage/HomePage';
import AllPokemonsPage from './pages/AllPokemonsPage/AllPokemonsPage';
import PokemonPage from './pages/PokemonPage/PokemonPage';

const App = () => (
  <div className="App">
    <Router>
      <header className="header">
        <div className="logo rotate">
          <img src={Ball} alt="Ball" width="100" />
        </div>
        <div>
          <img src={Logo} alt="Logo" width="300" />
        </div>
        <nav className="navigation">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'link link--active' : 'link')}
          >
            Home
          </NavLink>
          <NavLink
            to="/pokemon"
            className={({ isActive }) => (isActive ? 'link link--active' : 'link')}
          >
            Pokemons
          </NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokemon" element={<AllPokemonsPage />} />
        <Route path="/pokemon/:nameId" element={<PokemonPage />} />
        {/* <Route path="*" element={<Page404 />} /> */}
      </Routes>
      <footer className="footer">
        <nav className="navigation navigation__footer">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'link link--active' : 'link')}>Home</NavLink>
          <NavLink to="/pokemon" className={({ isActive }) => (isActive ? 'link link--active' : 'link')}>Pokemons</NavLink>
        </nav>
        <span className="made">Made by me</span>
      </footer>
    </Router>
  </div>
);

export default App;
