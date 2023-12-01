
import React from 'react';

const PlayerPage: React.FC = () => {
  const players = [
    { name: 'Garrett', gender: 'Male' },
    { name: 'Jon', gender: 'Male' },
    { name: 'Jess', gender: 'Female' },
  ];

  return (
    <div>
      <h1>Player List</h1>
      <ul>
        {players.map((player, index) => (
          <li key={index}>
            {player.name} - {player.gender}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayerPage;
