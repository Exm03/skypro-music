
import React from 'react';
import './App.css';
import cntrBar from "./components/bar"
import filter from './components/centerBlockFilter';
import search from './components/centerBlockSearch';
import centerContent from './components/cntrContent';
import footer from './components/footer';
import mainNav from './components/musicBlock';
import sidebar from './components/sideBar';

function App() {
  return ( 
        <div className="wrapper">
          <div className="container">
            <main className="main">
              {mainNav()}
              <div className="main__centerblock centerblock">
                {search()}
                <h2 className="centerblock__h2">Треки</h2>
                {filter()}
                {centerContent()}
              </div>
              {sidebar()}
            </main>
            {cntrBar()}
            {footer()}
          </div>
        </div>
      );
}

export default App;
