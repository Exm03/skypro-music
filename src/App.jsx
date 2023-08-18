/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import './App.css';
import cntrBar from "./components/bar"
import filter from './components/centerBlockFilter';
import search from './components/centerBlockSearch';
import centerContent from './components/cntrContent';
import footer from './components/footer';
import mainNav from './components/musicBlock';
import sidebar from './components/sideBar';
import { SkeletonTrackList } from "./components/skeleton/cntrContentSkeleton";
import { SkeletonSideBar } from "./components/skeleton/skeletonSideBar";
import { SkeletonAudioPlayer } from "./components/skeleton/skeletonAudioPlayer";

function App() {

  const [isLoading, setLoading] = useState(true);
  useEffect (() => {
  setTimeout(() => {
    setLoading(!isLoading);
  }, 5000)
  },[])

  return ( 
        <div className="wrapper">
          <div className="container">
            <main className="main">
              {mainNav()}
              <div className="main__centerblock centerblock">
                {search()}
                <h2 className="centerblock__h2">Треки</h2>
                {filter()}
                {isLoading ? SkeletonTrackList() : centerContent()}
              </div>
              {isLoading ? SkeletonSideBar() : sidebar()}
            </main>
            {isLoading ? SkeletonAudioPlayer() : cntrBar()}
            {footer()}
          </div>
        </div>
      );
}

export default App;
