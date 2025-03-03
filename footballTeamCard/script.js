const teamName = document.getElementById("team");
const typeOfSport = document.getElementById("sport");
const worldCupYear = document.getElementById("year");
const headCoach = document.getElementById("head-coach");
const playerCards = document.getElementById("player-cards");
const playersDropdownList = document.getElementById("players");
const myFavoriteFootballTeam = {
    team: "Morocco",
    sport: "Football",
    year: 2025,
    isWorldCupWinner: false,
    headCoach: {
      coachName: "Walid Regragui",
      matches: 10,
    },
    players: [
      {
        name: "Yassine Bounou",
        position: "goalkeeper",
        number: 1,
        isCaptain: false,
        nickname: "Bono",
      },
      {
        name: "Achraf Hakimi",
        position: "defender",
        number: 2,
        isCaptain: false,
        nickname: "The Rocket",
      },
      {
        name: "Romain Saïss",
        position: "defender",
        number: 6,
        isCaptain: true,
        nickname: "The Wall",
      },
      {
        name: "Noussair Mazraoui",
        position: "defender",
        number: 3,
        isCaptain: false,
        nickname: null,
      },
      {
        name: "Sofyan Amrabat",
        position: "midfielder",
        number: 4,
        isCaptain: false,
        nickname: "The Gladiator",
      },
      {
        name: "Azzedine Ounahi",
        position: "midfielder",
        number: 8,
        isCaptain: false,
        nickname: null,
      },
      {
        name: "Hakim Ziyech",
        position: "midfielder",
        number: 7,
        isCaptain: false,
        nickname: "The Magician",
      },
      {
        name: "Sofiane Boufal",
        position: "forward",
        number: 9,
        isCaptain: false,
        nickname: "The Artist",
      },
      {
        name: "Youssef En-Nesyri",
        position: "forward",
        number: 19,
        isCaptain: false,
        nickname: null,
      },
      {
        name: "Abdelhamid Sabiri",
        position: "midfielder",
        number: 11,
        isCaptain: false,
        nickname: null,
      },
      {
        name: "Ziyech El Yamiq",
        position: "defender",
        number: 5,
        isCaptain: false,
        nickname: null,
      },
      {
        name: "Munir Mohamedi",
        position: "goalkeeper",
        number: 12,
        isCaptain: false,
        nickname: null,
      },
      {
        name: "Tarik Tissoudali",
        position: "forward",
        number: 20,
        isCaptain: false,
        nickname: null,
      },
      {
        name: "Bilal El Khannouss",
        position: "midfielder",
        number: 23,
        isCaptain: false,
        nickname: null,
      },
      {
        name: "Selim Amallah",
        position: "midfielder",
        number: 13,
        isCaptain: false,
        nickname: null,
      },
      {
        name: "Jawad El Yamiq",
        position: "defender",
        number: 14,
        isCaptain: false,
        nickname: null,
      },
      {
        name: "Ilias Chair",
        position: "midfielder",
        number: 15,
        isCaptain: false,
        nickname: null,
      },
      {
        name: "Amine Harit",
        position: "midfielder",
        number: 16,
        isCaptain: false,
        nickname: null,
      },
      {
        name: "Fayçal Fajr",
        position: "midfielder",
        number: 17,
        isCaptain: false,
        nickname: null,
      },
      {
        name: "Chadi Riad",
        position: "defender",
        number: 18,
        isCaptain: false,
        nickname: null,
      },
      {
        name: "Anass Zaroury",
        position: "forward",
        number: 21,
        isCaptain: false,
        nickname: null,
      },
      {
        name: "Abderrazak Hamdallah",
        position: "forward",
        number: 10,
        isCaptain: false,
        nickname: "The Bomber",
      },
    ],
};  

Object.freeze(myFavoriteFootballTeam);
const { sport, team, year, players } = myFavoriteFootballTeam;
const { coachName } = myFavoriteFootballTeam.headCoach;

typeOfSport.textContent = sport;
teamName.textContent = team;
worldCupYear.textContent = year;
headCoach.textContent = coachName;

const setPlayerCards = (arr = players) => {
  playerCards.innerHTML += arr
    .map(
      ({ name, position, number, isCaptain, nickname }) => {
        return `
        <div class="player-card">
          <h2>${isCaptain ? "(Captain)" : ""} ${name}</h2>
          <p>Position: ${position}</p>
          <p>Number: ${number}</p>
          <p>Nickname: ${nickname !== null ? nickname : "N/A"}</p>
        </div>
      ` }
    )
    .join("");
};

playersDropdownList.addEventListener("change", (e) => {
  playerCards.innerHTML = "";

  switch (e.target.value) {
    case "nickname":
      setPlayerCards(players.filter((player) => player.nickname !== null));
      break;
    case "forward":
      setPlayerCards(players.filter((player) => player.position === "forward"));
      break;
    case "midfielder":
      setPlayerCards(
        players.filter((player) => player.position === "midfielder")
      );
      break;
    case "defender":
      setPlayerCards(
        players.filter((player) => player.position === "defender")
      );
      break;
    case "goalkeeper":
      setPlayerCards(
        players.filter((player) => player.position === "goalkeeper")
      );
      break;
    default:
      setPlayerCards();

  }
});
