const getPlayers = name => {
  return fetch(`https://www.balldontlie.io/api/v1/players?search=${name}`);
};

const getTeams = () => {
  return fetch("https://www.balldontlie.io/api/v1/teams");
};

const getPlayersOnTeam = name => {
  return fetch(`https://nba-players.herokuapp.com/players-stats-teams/${name}`);
};

const getGames = season => {
  return fetch(`https://api-nba-v1.p.rapidapi.com/games/seasonYear/${season}`, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
      "x-rapidapi-key": "5fdac9c300msh3ad590a4c0b43b8p161ce8jsnb80b45cff7c2"
    }
  });
};

const getPlayerImg = (firsName, lastName) => {
  return fetch(
    `https://nba-players.herokuapp.com/players/${firsName}/${lastName}`
  );
};

export { getPlayers, getTeams, getPlayersOnTeam, getGames, getPlayerImg };
