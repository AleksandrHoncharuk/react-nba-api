import React, { useState, useEffect } from "react";
import { getPlayerImg } from "../../api/api";
import { Link } from "react-router-dom";

export default function NewPlayer({ list }) {
  const [img, setImg] = useState("");
  useEffect(() => {
    getPlayerImg(list.last_name, list.first_name)
      .then(res => {
        return setImg(res.url);
      })
      .catch(err => console.log(err));
  }, [list]);

  console.log(list);

  return (
    <div className="stats">
      <img src={img} alt="" />
      <div className="stats-player-wrapper">
        <h3>{list.last_name + " " + list.first_name}</h3>
        <p> Position:{list.position}</p>
        <Link to={`/${list.team.abbreviation}`}>
          <p>Team: {list.team.full_name}</p>
        </Link>
      </div>
    </div>
  );
}
