import React from 'react';

const Page: React.FC = () => {
  // Tempe, Feb 10-11
  // NJ/Philly March 9-10
  // Atlanta May 4-5
  // Austin May 25-26
  // San Diego July 6-7
  // Chicago 9/7-9/8
  // KC (Nationals) 10/18-10/20
  const tournaments = [
    { name: 'Tempe', date: 'Feb 10-11' },
    { name: 'NJ/Philly', date: 'March 9-10' },
    { name: 'Atlanta', date: 'May 4-5' },
    { name: 'Austin', date: 'May 25-26' },
    { name: 'San Diego', date: 'July 6-7' },
    { name: 'Chicago', date: '9/7-9/8' },
    { name: 'KC (Nationals)', date: '10/18-10/20' },
  ];

  const tournamentRosters =[
    {name: 'Tempe', roster_registered: ['Garrett', 'Jess', 'Yiwei', 'Dave', 'Jackie', 'Guy Alex', 'Dave Roy']},
  ]

  function tournamentHeader(tournament) {
    return <h2>{tournament.name} {tournament.date}</h2>;
  }

  function tournamentRow(tournament) {
    const headerJSX = tournamentHeader(tournament);
    const tournamentRoster = tournamentRosters.find(roster => roster.name === tournament.name);
    const rowJSX = tournamentRoster ? tournamentRoster.roster_registered.map(player => <li>{player}</li>) : <li>Not Registered</li>;
    return <div>
      {headerJSX}
      <ul>
        {rowJSX}
      </ul>
    </div>;
  }

  return (
    <div>
      <h1> Upcoming Tournaments </h1>
      {tournaments.map((tournament) => (
        tournamentRow(tournament)
      ))}
    </div>
  );
};

export default Page;
