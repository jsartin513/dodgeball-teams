import React from 'react';

import { TournamentWeekend, Tournament } from '../lib/definitions';

const Page: React.FC = () => {
  const tournamentWeekends: TournamentWeekend[] = [
    { name: 'Tempe', startDate: new Date('2024-02-10'), endDate: new Date('2024-02-11') },
    { name: 'NJ/Philly', startDate: new Date('2024-03-09'), endDate: new Date('2024-03-10') },
    { name: 'Atlanta', startDate: new Date('2024-05-04'), endDate: new Date('2024-05-05') },
    { name: 'Austin', startDate: new Date('2024-05-25'), endDate: new Date('2024-05-26') },
    { name: 'San Diego', startDate: new Date('2024-07-06'), endDate: new Date('2024-07-07') },
    { name: 'Chicago', startDate: new Date('2024-09-07'), endDate: new Date('2024-09-08') },
    { name: 'KC (Nationals)', startDate: new Date('2024-10-18'), endDate: new Date('2024-10-20') },
  ];

  const tournaments =[
    {name: 'Tempe', gender:'Mixed', ballType: "foam", rosterRegistered: ['Garrett', 'Jess', 'Yiwei', 'Dave', 'Jackie', 'Guy Alex', 'Dave Roy']},
    {name: 'Tempe', gender: 'Open', ballType: "foam"},
    {name: 'Tempe', gender: 'Open', ballType: "cloth"},
  ]

  function tournamentHeader(tournament: TournamentWeekend) {
    return <h2>{tournament.name} {formatDateRange(tournament)}</h2>;
  }
  
  // Takes a start and end date and returns a string of the form "Month DD-DD"
  function formatDateRange(tournament: TournamentWeekend) {
    const startMonth = tournament.startDate.toLocaleString('default', { month: 'short' });
    const startDay = tournament.startDate.getDate();
    const endDay = tournament.endDate.getDate();
    return `${startMonth} ${startDay}-${endDay}`;
  }

  function tournamentRow(tournament: TournamentWeekend) {
    const headerJSX = tournamentHeader(tournament);
    const tourneyRosters: Tournament[] = tournaments.filter(roster => roster.name === tournament.name);
    const rosterSectionsJSX = tourneyRosters.map((tourney) => {
      const rowHeader = <h3>{tourney.gender} {tourney.ballType}</h3>;
      const rowJSX = (
        <div>
          {tourney.rosterRegistered && tourney.rosterRegistered.length > 0 && (
            <div>
              <h4>Registered Players</h4>
              <ul>
                {tourney.rosterRegistered.map((player) => (
                  <li>{player}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      );
      return (
        <div>
          {rowHeader}
          {rowJSX}
        </div>
      );
    });
      
    const rowJSX = tournaments.length > 0 ? rosterSectionsJSX : <div>No rosters yet</div>;
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
      {tournamentWeekends.map((tournament) => (
        tournamentRow(tournament)
      ))}
    </div>
  );
};

export default Page;
