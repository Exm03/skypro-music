
import React from 'react';
import './App.css';
import cntrBar from "./components/bar"
import filter from './components/centerBlockFilter';
import search from './components/centerBlockSearch';
import centerContent from './components/cntrContent';

function App() {
  return ( 
        <div className="wrapper">
          <div className="container">
            <main className="main">
              <nav className="main__nav nav">
                <div className="nav__logo logo">
                  <img className="logo__image" src="img/logo.png" alt="logo" />
                </div>
                <div className="nav__burger burger">
                  <span className="burger__line"></span>
                  <span className="burger__line"></span>
                  <span className="burger__line"></span>
                </div>
                <div className="nav__menu menu">
                  <ul className="menu__list">
                    <li className="menu__item">
                      <a href="#" className="menu__link">Главное</a>
                    </li>
                    <li className="menu__item">
                      <a href="#" className="menu__link">Мой плейлист</a>
                    </li>
                    <li className="menu__item">
                      <a href="../signin.html" className="menu__link">Войти</a>
                    </li>
                  </ul>
                </div>
              </nav>
              <div className="main__centerblock centerblock">
                {search()}
                <h2 className="centerblock__h2">Треки</h2>
                {filter()}
                {centerContent()}
              </div>
              <div className="main__sidebar sidebar">
                <div className="sidebar__personal">
                  <p className="sidebar__personal-name">Sergey.Ivanov</p>
                  <div className="sidebar__icon">
                    <svg alt="logout">
                      <use xlinkHref="img/icon/sprite.svg#logout"></use>
                    </svg>
                  </div>
                </div>
                <div className="sidebar__block">
                  <div className="sidebar__list">
                    <div className="sidebar__item">
                      <a className="sidebar__link" href="#">
                        <img
                          className="sidebar__img"
                          src="img/playlist01.png"
                          alt="day's playlist"
                        />
                      </a>
                    </div>
                    <div className="sidebar__item">
                      <a className="sidebar__link" href="#">
                        <img
                          className="sidebar__img"
                          src="img/playlist02.png"
                          alt="day's playlist"
                        />
                      </a>
                    </div>
                    <div className="sidebar__item">
                      <a className="sidebar__link" href="#">
                        <img
                          className="sidebar__img"
                          src="img/playlist03.png"
                          alt="day's playlist"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </main>
            {cntrBar()}
            <footer className="footer"></footer>
          </div>
        </div>
      );
}

export default App;
