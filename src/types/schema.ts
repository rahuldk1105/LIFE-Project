import type { GameSide, GameStatus } from './enums';

export interface Player {
  id: string;
  username: string;
  avatar: string;
  level: number;
}

export interface CoinflipGame {
  id: string;
  player1: Player;
  player2: Player | null;
  weapons: string[];
  value: number;
  status: GameStatus;
  side: GameSide;
}

export interface ChatMessage {
  id: string;
  user: Player;
  message: string;
  timestamp: Date;
}

export interface Giveaway {
  title: string;
  status: "live" | "ended";
  isJoined: boolean;
}

export interface RaffleInfo {
  prize: number;
  daysLeft: number;
  hoursLeft: number;
  minutesLeft: number;
}