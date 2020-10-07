import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./TeamView.scss";
import { getPlayersOnTeam } from "../../api/api";
import { Link } from "react-router-dom";

export default function TeamView() {
  const [teammates, setTeammates] = useState([]);
  let { name } = useParams();

  useEffect(() => {
    getPlayersOnTeam(name.toLowerCase())
      .then(res => {
        return res.json();
      })
      .then(data => {
        setTeammates(data);
      });
  }, []);

  return (
    <div className="team-players">
      <Link to={"/"}>
        <button className="back-btn">&larr;</button>
      </Link>

      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Assist PG</th>
            <th>Blocks PG</th>
            <th>Rebounds PG</th>
            <th>Points PG</th>
          </tr>
          {teammates.map((teammate, i) => {
            return (
              <tr key={i}>
                <td className="team-players-list-position">
                  {++i + ". " + teammate.name}
                </td>
                <td>{teammate.points_per_game}</td>
                <td>{teammate.assists_per_game}</td>
                <td>{teammate.blocks_per_game}</td>
                <td>{teammate.rebounds_per_game}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
