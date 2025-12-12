import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Eye } from 'lucide-react';
import type { CoinflipGame } from '../types/schema';
import { formatCurrency } from '../utils/formatters';

interface GameCardProps {
  game: CoinflipGame;
  onJoinGame?: () => void;
}

export function GameCard({ game, onJoinGame }: GameCardProps) {
  return (
    <div className="relative group w-full">
      {/* Card Container */}
      <Card className="bg-[#14121b] border-2 border-transparent hover:border-[#9d63fa]/20 transition-all rounded-xl h-[92px] flex flex-row items-center px-5 py-0 w-full relative overflow-hidden shadow-lg gap-6">

        {/* Left Accent Bar (Vertical) - Positioned absolutely left */}
        <div className="absolute left-0 top-3 bottom-3 w-[4px] bg-[#9d63fa] rounded-r-sm shadow-[0_0_15px_rgba(157,99,250,0.6)]" />

        {/* Players Section: P1 vs P2 */}
        <div className="flex items-center gap-4 min-w-[160px] z-20 shrink-0 pl-2">
          {/* Player 1 Avatar (Purple/Blue Border) */}
          <div className="relative">
            <Avatar className="w-[52px] h-[52px] rounded-xl border-[3px] border-[#6b47c4] bg-[#1f1732] shadow-lg">
              <AvatarImage src={game.player1.avatar} className="object-cover" />
              <AvatarFallback className="bg-[#1f1732] text-white font-bold">{game.player1.username[0]}</AvatarFallback>
            </Avatar>
          </div>

          {/* VS Text */}
          <span className="text-[14px] font-black text-white italic opacity-90">VS</span>

          {/* Player 2 Avatar (Yellow Border or Empty State) */}
          <div className="relative">
            <Avatar className="w-[52px] h-[52px] rounded-xl border-[3px] border-[#eab308] bg-[#1f1732] shadow-lg">
              {game.player2 ? (
                <AvatarImage src={game.player2.avatar} className="object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-[#1f1732]">
                  <span className="text-[20px] text-white/20 font-bold">?</span>
                </div>
              )}
              <AvatarFallback className="bg-[#1f1732] text-white">{game.player2?.username[0] || '?'}</AvatarFallback>
            </Avatar>
          </div>
        </div>

        {/* Items / Weapons Grid */}
        <div className="flex-1 flex items-center gap-1 overflow-hidden relative z-10 h-full">
          {/* Render weapons directly without container boxes, floating style */}
          {game.weapons.slice(0, 8).map((weapon, idx) => (
            <div key={idx} className="relative w-[52px] h-[52px] flex items-center justify-center shrink-0 transition-transform hover:scale-105 cursor-pointer group/item">
              {/* Subtle glow behind item */}
              <div className="absolute inset-2 bg-[#bd2f54]/20 blur-md rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity" />
              <img
                src={weapon}
                alt="item"
                className="w-[85%] h-[85%] object-contain drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] z-10"
              />
            </div>
          ))}

          {/* Right fade gradient to smooth out overflow */}
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#14121b] to-transparent pointer-events-none" />
        </div>

        {/* Right Section: Value & Actions */}
        <div className="flex items-center gap-6 min-w-fit justify-end z-20 shrink-0">
          {/* Coinflip Value */}
          <div className="flex flex-col items-end justify-center">
            <span className="text-[10px] font-bold text-[#6f6b85] uppercase tracking-wide mb-0.5">Coinflip Value:</span>
            <div className="flex items-center gap-2">
              {/* Gun Icon (Placeholder for exact SVG) */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#6f6b85]">
                <path d="M4 11H8V13H4V11ZM4 6H8V8H4V6ZM16 5V15C16 15.55 15.55 16 15 16H9V18H15C16.66 18 18 16.66 18 15V5H16ZM20 2H10C8.9 2 8 2.9 8 4V16H2V22L6.11 20.63C7.45 20.18 8.68 19.34 9.68 18.25L14 13.5V5C14 3.9 14.9 3 16 3H20V2Z" fill="currentColor" />
              </svg>
              <span className="text-[14px] font-black text-white tracking-wide">{formatCurrency(game.value)}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            {/* View Button (Eye) */}
            <Button
              variant="ghost"
              className="w-[38px] h-[38px] p-0 rounded-lg bg-[#211f2b] hover:bg-[#2e2b3b] text-[#8b87a0] transition-colors"
            >
              <Eye className="w-5 h-5" />
            </Button>

            {/* Join Game Button */}
            <Button
              onClick={onJoinGame}
              className="h-[38px] bg-[#9d63fa] hover:bg-[#8b55e0] text-white font-bold text-[13px] px-6 rounded-lg shadow-lg hover:shadow-[#9d63fa]/25 transition-all"
            >
              Join Game
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}