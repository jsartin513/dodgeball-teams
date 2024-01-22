import { TournamentWeekend } from './definitions';

export const tournamentWeekends: TournamentWeekend[] = [
  { name: 'Tempe', startDate: new Date('2024-02-11'), endDate: new Date('2024-02-12') },
  { name: 'NJ/Philly', startDate: new Date('2024-03-10'), endDate: new Date('2024-03-11') },
  { name: 'Atlanta', startDate: new Date('2024-05-05'), endDate: new Date('2024-05-06') },
  { name: 'Austin', startDate: new Date('2024-05-26'), endDate: new Date('2024-05-27') },
  { name: 'San Diego', startDate: new Date('2024-07-07'), endDate: new Date('2024-07-08') },
  { name: 'Chicago', startDate: new Date('2024-09-08'), endDate: new Date('2024-09-09') },
  { name: 'KC (Nationals)', startDate: new Date('2024-10-19'), endDate: new Date('2024-10-21') },
];

export const tournaments =[
  {name: 'Tempe', gender:'Mixed', ballType: "foam", roster: { 'Garrett': 'registered', 'Jess': 'registered', 'Yiwei': 'registered', 'Dave': 'registered', 'Jackie': 'registered', 'Guy Alex': 'registered', 'Dave Roy': 'registered' }},
  {name: 'Tempe', gender: 'Open', ballType: "foam"},
  {name: 'Tempe', gender: 'Open', ballType: "cloth"},
  {name: 'NJ/Philly', gender: 'Mixed', ballType: "foam"},
  {name: 'NJ/Philly', gender: 'Open', ballType: "foam"},
  {name: 'NJ/Philly', gender: 'Open', ballType: "cloth"},
]

export const players = [
  { name: 'Garrett', gender: 'Male', number: "34" },
  { name: 'Jon', gender: 'Male', number: "2" },
  { name: 'Jess', gender: 'Female', number: "00" },
  { name: 'Yiwei', gender: 'Female', number: '14'},
  { name: 'Abby', gender: 'Female', number: '24'},
  { name: 'Dave', gender: 'Male'},
  { name: 'Pofo', gender: 'Male', number: '57', type: "guest"},

];
