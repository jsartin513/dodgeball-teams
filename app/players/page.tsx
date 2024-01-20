
import React from 'react';

const PlayerPage: React.FC = () => {
  const players = [
    { name: 'Garrett', gender: 'Male', number: "34" },
    { name: 'Jon', gender: 'Male', number: "2" },
    { name: 'Jess', gender: 'Female', number: "00" },
    { name: 'Yiwei', gender: 'Female', number: '14'},
    { name: 'Abby', gender: 'Female', number: '24'},
    { name: 'Dave', gender: 'Male'},
    { name: 'Pofo', gender: 'Male', number: '57', type: "guest"},

  ];

  // Given a player object, returns a list item displaying that player
  function playerRow(player, index: number) {
    // Only show the player number if it is present
    const playerString = player.number ? `${player.number}: ${player.name}` : player.name;

    return <li key = {index}>
      {playerString} - {player.gender}
    </li>;
  }


  const fullTimePlayers = players.filter(player => player.type !== "guest");
  const guestPlayers = players.filter(player => player.type === "guest");

  return (
    <div>
      <h1>Boston Heist</h1>
      <h2>Boston Players</h2>
      <ul>
        {fullTimePlayers.map((player, index) => (
          playerRow(player, index)
        ))}
      </ul>
      <h2>Guest Starring</h2>
      <ul>
        {guestPlayers.map((player, index) => (
          playerRow(player, index)
        ))}
      </ul>
    </div>
  );
};

export default PlayerPage;
