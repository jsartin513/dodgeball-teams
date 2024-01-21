type Player = {
  name: string;
  jerseyName: string;
  gender: string;
  type?: string;
  number?: number;
  borrowedJersey?: number;
};

type TournamentWeekend = {
  name: string;
  startDate: Date;
  endDate: Date;
};

type Tournament = {
  ballType: string;
  gender: string;
  roster: Player[];
  tournamentWeekend: TournamentWeekend;
};


