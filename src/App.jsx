import React, { useRef } from "react";
import "./App.scss";

import logo from "./logo.png";
import players from "./players.png";
import Players from "./pages/Players/Players";
import Games from "./pages/Games/Games";
import Teams from "./pages/Teams/Teams";

function App() {
  const playersRef = useRef();
  const teamsRef = useRef();
  const gamesRef = useRef();

  const ScrollToPlayers = event => {
    window.scrollTo(0, playersRef.current.offsetTop);
  };
  const ScrollToGames = event => {
    window.scrollTo(0, gamesRef.current.offsetTop);
  };
  const ScrollToTeams = event => {
    window.scrollTo(0, teamsRef.current.offsetTop);
  };

  return (
    <div className="App">
      <header className="header">
        <span></span>

        <div className="wrapper">
          <img src={logo} alt="" />

          <ul className="header__list">
            <li className="header__list_item margin-left">
              <a href="#" onClick={ScrollToPlayers}>
                Players
              </a>
            </li>

            <li className="header__list_item">
              <a onClick={ScrollToTeams}>Teams</a>
            </li>

            <li className="header__list_item">
              <a onClick={ScrollToGames}>Games</a>
            </li>
          </ul>
        </div>

        <div className="tagline">
          <p>Basketball is life</p>
          <p className="tagline_margin">The rest is just details</p>
        </div>
      </header>

      <main>
        <article>
          <section className="main__wrapper">
            <img src={players} alt="player" className="players-img" />

            <div className="main__wrapper-players">
              <div className="text-alight">
                <h3>All about NBA</h3>
                <a onClick={ScrollToPlayers}>Players</a>
                <span>
                  You can find out about the player and his statistics.
                </span>
              </div>
            </div>

            <div className="main__wrapper-teams">
              <div className="text-alight">
                <a onClick={ScrollToTeams}>Teams</a>
                <span>Find out all the teams and their lineups.</span>
              </div>
            </div>

            <div className="main__wrapper-games">
              <div className="text-alight">
                <a onClick={ScrollToGames}>Games</a>
                <span>
                  Find all the games in recent years and their statistics.
                </span>
              </div>
            </div>
          </section>

          <section className="main__games-section" ref={gamesRef}>
            <h2>Games during the season</h2>
            <Games />
          </section>

          <section className="main__players-section" ref={playersRef}>
            <h2>Find your player</h2>
            <Players />
          </section>

          <section className="main__teams-section" ref={teamsRef}>
            <Teams />
          </section>
        </article>
      </main>

      <footer>
        <h3> &copy; Created by Aleksandr. Обращайтесь</h3>
      </footer>
    </div>
  );
}

export default App;
