import type { CoinflipGame, ChatMessage, Player, RaffleInfo, Giveaway } from '../types/schema';

export const mockPlayers: Player[] = [
  { id: '1', username: 'Normsdemise1', avatar: '/avatars/player-avatar.png', level: 79 },
  { id: '2', username: 'Normsdemise2', avatar: '/avatars/player-avatar.png', level: 128 },
  { id: '3', username: 'Normsdemise3', avatar: '/avatars/player-avatar.png', level: 65 },
  { id: '4', username: 'Normsdemise', avatar: '/avatars/player-avatar.png', level: 79 },
];

const weaponIcons = [
  '/weapons/sword.png',
  '/weapons/sword.png',
  '/weapons/sword.png',
  '/weapons/sword.png',
];

export const mockGames: CoinflipGame[] = [
  {
    id: '1',
    player1: mockPlayers[0],
    player2: mockPlayers[1],
    weapons: Array(8).fill(weaponIcons[0]),
    value: 108.35,
    status: 'waiting',
    side: 'heads',
  },
  {
    id: '2',
    player1: mockPlayers[2],
    player2: mockPlayers[3],
    weapons: Array(8).fill(weaponIcons[1]),
    value: 108.35,
    status: 'waiting',
    side: 'tails',
  },
  {
    id: '3',
    player1: mockPlayers[1],
    player2: mockPlayers[0],
    weapons: Array(8).fill(weaponIcons[2]),
    value: 108.35,
    status: 'waiting',
    side: 'heads',
  },
  {
    id: '4',
    player1: mockPlayers[3],
    player2: null,
    weapons: Array(8).fill(weaponIcons[3]),
    value: 108.35,
    status: 'waiting',
    side: 'tails',
  },
];

export const mockChatMessages: ChatMessage[] = [
  {
    id: '1',
    user: mockPlayers[2],
    message: 'fuck this shit bro everyone winning wb me dude this shit hurts my soul dawg 😭',
    timestamp: new Date(),
  },
  {
    id: '2',
    user: mockPlayers[0],
    message: 'pls let me win bro you cleaned me 3 times @Normsdemise2',
    timestamp: new Date(),
  },
  {
    id: '3',
    user: mockPlayers[2],
    message: 'fuck this shit bro everyone winning wb me dude this shit hurts my soul dawg 😭',
    timestamp: new Date(),
  },
  {
    id: '4',
    user: mockPlayers[1],
    message: 'W FUCKING 100X IM OUT',
    timestamp: new Date(),
  },
  {
    id: '5',
    user: mockPlayers[3],
    message: 'can i get some of my loss back?',
    timestamp: new Date(),
  },
  {
    id: '6',
    user: mockPlayers[1],
    message: '@Normsdemise no stay poor </3',
    timestamp: new Date(),
  },
  {
    id: '7',
    user: mockPlayers[2],
    message: 'yo please tip dawg i been giving u fire ass calls and i got nothing its time',
    timestamp: new Date(),
  },
  {
    id: '8',
    user: mockPlayers[3],
    message: 'USE CODE "NORMS" BOYS FOR 15% DEPOSIT BONUS',
    timestamp: new Date(),
  },
];

export const mockRaffleInfo: RaffleInfo = {
  prize: 20000,
  daysLeft: 6,
  hoursLeft: 12,
  minutesLeft: 54,
};

export const mockGiveaway: Giveaway = {
  title: 'Harvester Giveaway',
  status: 'live',
  isJoined: false,
};

export const mockCurrentUser: Player = {
  id: 'current',
  username: '@NormsDemise',
  avatar: '/avatars/player-avatar.png',
  level: 10,
};