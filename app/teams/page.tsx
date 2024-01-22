import React from 'react';

import { tournaments, tournamentWeekends } from './../lib/data';
import { Tournament, TournamentWeekend } from './../lib/definitions';

const Page: React.FC = () => {

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
    const tourneyRosters = tournaments.filter(roster => roster.name === tournament.name);
    const rosterSectionsJSX = tourneyRosters.map((tourney) => {
      const rowHeader = <h3>{tourney.gender} {tourney.ballType}</h3>;
      const registeredPlayers = Object.entries(tourney.roster || {}).filter(([_, status]) => status === 'registered');
      const registeredPlayersJSX = registeredPlayers.map(([playerName]) => (
        <li key={playerName}>{playerName}</li>
      ));
      const rowJSX = (
        <div>
          {registeredPlayers.length > 0 && (
            <div>
              <h4>Registered Players</h4>
              <ul>
                {registeredPlayersJSX}
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
        