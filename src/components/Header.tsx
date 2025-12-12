
import { useState } from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ChevronDown, Wallet as WalletIcon, Ticket, Share2 } from 'lucide-react'; // Using Share2 as placeholder for the gun/weapon icon if needed, or import custom
import type { Player } from '../types/schema';
import { formatCurrency } from '../utils/formatters';

interface HeaderProps {
  currentUser: Player;
  balance: number;
}

export function Header({ currentUser, balance }: HeaderProps) {
  // Mock countdown for raffle
  const [timeLeft] = useState({ d: 6, h: 12, m: 54 });

  return (
    <div className="flex flex-col w-full z-20 bg-[#07070f]">
      {/* Top Bar - Links */}
      <div className="flex px-8 pt-4 pb-2 gap-6 bg-[#07070f]">
        {['Affiliates', 'Fairness', 'FAQ', 'Support'].map((link) => (
          <button key={link} className="text-[12px] font-bold text-[#5e5e70] hover:text-white transition-colors capitalize tracking-wide">
            {link}
          </button>
        ))}
      </div>

      {/* Main Navbar */}
      <div className="flex items-center justify-between px-8 py-3">
        {/* Left: Games Button */}
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center rounded-lg overflow-hidden transition-all focus:outline-none group">
              <div className="h-[30px] w-[30px] bg-[#9d63fa] flex items-center justify-center rounded-l-lg shadow-[0_0_15px_rgba(157,99,250,0.4)]">
                <img src="/logo.svg" className="w-5 h-5 brightness-0 invert" alt="Logo" />
              </div>
              <div className="h-[30px] bg-[#1d1429] flex items-center gap-2 px-4 rounded-r-lg border border-[#9d63fa]/20 group-hover:bg-[#2a1d3d] transition-colors">
                <span className="text-[15px] font-bold text-white">Games</span>
                <ChevronDown className="w-4 h-4 text-white" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {/* Dropdown items */}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Center: Balance Pill */}
        <div className="flex items-center">
          <div className="flex items-center h-[30px] bg-[#14141d] rounded-xl overflow-hidden p-1 border border-white/5">
            {/* Weapon Icon Area */}
            <div className="h-full px-3 flex items-center justify-center">
              {/* Placeholder for Gun Icon - using a text char or generic icon for now if custom svg not available */}
              <Share2 className="w-4 h-4 text-[#5e5e70] rotate-45" />
            </div>

            {/* Balance Text */}
            <span className="text-[15px] font-black text-white px-2 tracking-wide">
              {formatCurrency(balance)}
            </span>

            {/* Wallet Button */}
            <button className="h-[25px] w-[25px] bg-[#9d63fa] rounded-lg flex items-center justify-center ml-2 hover:bg-[#8b55e0] transition-colors shadow-lg">
              <WalletIcon className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        {/* Right: Raffle Info & Auth/Profile */}
        <div className="flex items-center gap-6">
          {/* Raffle Info */}
          <div className="flex items-center gap-3">
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-1.5">
                <Ticket className="w-3 h-3 text-[#ffb327] fill-[#ffb327]" />
                <span className="text-[13px] font-black text-white leading-none">$20,000</span>
              </div>
              <span className="text-[10px] font-bold text-white uppercase tracking-wider">Weekly Raffle</span>
              <div className="flex items-center gap-1.5 mt-0.5">
                <div className="w-3 h-3 rounded-full flex items-center justify-center bg-[#2d1f45]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#9d63fa] animate-pulse" />
                </div>
                <span className="text-[11px] font-bold text-[#9d63fa]">Ends in {timeLeft.d}d {timeLeft.h}h {timeLeft.m}m</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}