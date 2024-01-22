export type Player = {
  name: string;
  jerseyName: string;
  gender: string;
  type?: string;
  number?: number;
  borrowedJersey?: number;
};

export type TournamentWeekend = {
  name: string;
  startDate: Date;
  endDate: Date;
};

export type Tournament = {
  ballType: string;
  gender: string;
  roster: Player[];
  tournamentWeekend: TournamentWeekend;
};

export type playerSkills = {
  player: Player;
  positions: string[];
  rush: boolean;
  takePitchback: boolean;
  playCall: boolean;
  catch: number;
  throwingAccuracy: number;
  throwingStrength: number;
  defense: number;
  blocking: number;
  courtPresence: number;
};


