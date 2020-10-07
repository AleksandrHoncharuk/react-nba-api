import React, { useEffect, useState } from "react";
import "./Games.scss";
import { getGames } from "../../api/api";
import GameView from "./GameView";

export default function Games() {
  const [games, setGames] = useState({
    game: [],
    season: "2018"
  });

  useEffect(() => {
    getGames(games.season)
      .then(res => {
        return res.json();
      })
      .then(data => {
        const arr = data.api.games.slice(0, 20);
        setGames({ ...games, game: arr });
      })
      .catch(err => console.log(err));
  }, [games.season]);

  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <div className="games">
      <h3 className="season">Choose season</h3>
      <form onSubmit={handleSubmit}>
        <select
          value={games.season}
          onChange={e => {
            setGames({ ...games, season: e.target.value });
          }}
        >
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
        </select>
      </form>
      <div className="wrap">
        {games.game.map((game, i) => {
          return <GameView key={i} game={game} />;
        })}
      </div>
    </div>
  );
}
