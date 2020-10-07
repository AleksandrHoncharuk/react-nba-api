import React from "react";
import { getGames } from "../../api/api";

export default function GameView({ game }) {
  return (
    <div className="games__wrapper">
      <h3 className="arena">{game.arena}</h3>

      <div className="games__wrapper-flex">
        <div className="games__wrapper-flex-comp">
          <img src={game.hTeam.logo} alt="" />
          <div className="games__wrapper-list">
            <h3>{game.hTeam.fullName}</h3>
            <p>{game.hTeam.score.points + "-HOME"}</p>
          </div>
        </div>

        <div className="games__wrapper-flex-comp">
          <img src={game.vTeam.logo} alt="" />
          <div className="games__wrapper-list">
            <h3>{game.vTeam.fullName}</h3>
            <p>{game.vTeam.score.points + "-VISIT"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
