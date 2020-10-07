import React, { useState } from "react";
import { getPlayers } from "../../api/api";
import "./Players.scss";
import NewPlayer from "./NewPlayer";

export default function Players() {
  const [players, setPlayers] = useState({
    name: " ",
    stats: {}
  });

  const handleChange = e => {
    const replace = e.target.value;

    if (replace.length)
      getPlayers(players.name)
        .then(res => {
          return res.json();
        })
        .then(({ data }) => {
          setPlayers({
            ...players,
            name: replace,
            stats: data[0]
          });
        })
        .catch(err => console.log(err));
  };

  return (
    <div className="players">
      <form className="players__form">
        <input type="text" value={players.value} onChange={handleChange} />
      </form>
      {Object.keys(players.stats).length === 0 ? null : (
        <NewPlayer list={players.stats} />
      )}
    </div>
  );
}
