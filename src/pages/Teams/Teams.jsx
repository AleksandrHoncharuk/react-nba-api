import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { getTeams } from "../../api/api";
import "./Teams.scss";
import TeamView from "./TeamView";
import TeamComp from "./TeamComp";

export default function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    getTeams()
      .then(res => {
        return res.json();
      })
      .then(data => {
        setTeams(data.data);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <Router>
      <div className="teams_wrapper">
        <>
          <Switch>
            <Route exact path="/" children={<TeamComp teams={teams} />} />
            <Route exact path="/:name" children={<TeamView />}></Route>
          </Switch>
        </>
      </div>
    </Router>
  );
}
