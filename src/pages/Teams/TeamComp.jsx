import React from "react";
import { Link } from "react-router-dom";

export default function TeamComp({ teams }) {
  return (
    <>
      <h3>Teams</h3>
      <div className="team-list">
        <div className="division-wrapper">
          <h3>Central</h3>
          <div className="line"></div>
          {teams.map((team, i) => {
            if (team.division === "Central") {
              return (
                <Link key={i} to={`/${team.abbreviation}`}>
                  <p>{team.full_name}</p>
                </Link>
              );
            }
          })}
        </div>

        <div className="division-wrapper">
          <h3>Atlantic</h3>
          <div className="line"></div>
          {teams.map((team, i) => {
            if (team.division === "Atlantic") {
              return (
                <Link key={i} to={`/${team.abbreviation}`}>
                  <p>{team.full_name}</p>
                </Link>
              );
            }
          })}
        </div>

        <div className="division-wrapper">
          <h3>Southeast</h3>
          <div className="line"></div>
          {teams.map((team, i) => {
            if (team.division === "Southeast") {
              return (
                <Link key={i} to={`/${team.abbreviation}`}>
                  <p>{team.full_name}</p>
                </Link>
              );
            }
          })}
        </div>

        <div className="division-wrapper">
          <h3>Southwest</h3>
          <div className="line"></div>
          {teams.map((team, i) => {
            if (team.division === "Southwest") {
              return (
                <Link key={i} to={`/${team.abbreviation}`}>
                  <p>{team.full_name}</p>
                </Link>
              );
            }
          })}
        </div>

        <div className="division-wrapper">
          <h3>Pacific</h3>
          <div className="line"></div>
          {teams.map((team, i) => {
            if (team.division === "Pacific") {
              return (
                <Link key={i} to={`/${team.abbreviation}`}>
                  <p>{team.full_name}</p>
                </Link>
              );
            }
          })}
        </div>

        <div className="division-wrapper">
          <h3>Northwest</h3>
          <div className="line"></div>
          {teams.map((team, i) => {
            if (team.division === "Northwest") {
              return (
                <Link key={i} to={`/${team.abbreviation}`}>
                  <p>{team.full_name}</p>
                </Link>
              );
            }
          })}
        </div>
      </div>
    </>
  );
}
