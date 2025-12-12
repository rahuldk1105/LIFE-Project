import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Home, Coins, ArrowUpDown, ChevronUp, ChevronDown, Monitor, FileText, History, Trophy, Youtube, Disc, Instagram } from 'lucide-react';

export function Sidebar() {
  const [gamesOpen, setGamesOpen] = useState(true);
  const [supportOpen, setSupportOpen] = useState(true);

  return (
    <div className="w-[240px] bg-[#07070f] flex flex-col p-3 border-r border-white/5 h-full overflow-y-auto scrollbar-hide">

      {/* Sidebar Header Logo */}
      <div className="flex items-center justify-center py-6 mb-2">
        <h1 className="text-[22px] font-black tracking-tight select-none">
          <span className="text-[#9d63fa]">Splitter</span>
          <span className="text-white">.GG</span>
        </h1>
      </div>

      {/* Main / Marketplace Toggle */}
      <div className="flex bg-[#120c1d] p-1 rounded-lg mb-3 border border-white/5 mx-0.5">
        <button className="flex-1 py-1.5 px-3 text-[11px] font-bold text-white bg-[#9d63fa] rounded-md shadow-lg tracking-wide">Main</button>
        <button className="flex-1 py-1.5 px-3 text-[11px] font-bold text-[#5e5e70] hover:text-white transition-colors">
          Marketplace
        </button>
      </div>

      {/* Home Button */}
      <Button
        variant="ghost"
        className="w-full justify-start gap-3.5 text-[12px] font-bold text-white bg-[#120c1d] hover:bg-[#1f1732] px-4 py-2.5 rounded-lg border border-white/5 mb-3 mx-0.5 h-auto group"
      >
        <Home className="w-4 h-4 text-[#9d63fa] group-hover:text-white transition-colors" fill="#9d63fa" />
        Home
      </Button>

      {/* Games Section */}
      <div className="bg-[#120c1d] rounded-lg border border-white/5 mx-0.5 mb-3 overflow-hidden p-1">
        <Collapsible open={gamesOpen} onOpenChange={setGamesOpen} className="w-full">
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              className="w-full justify-between items-center text-[11px] font-bold text-white hover:bg-white/5 px-3 py-2 rounded-md h-auto mb-1"
            >
              Games
              {gamesOpen ? (
                <ChevronUp className="w-3.5 h-3.5 text-[#9d63fa]" />
              ) : (
                <ChevronDown className="w-3.5 h-3.5 text-[#5e5e70]" />
              )}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="flex flex-col gap-1 pb-1">
            <Button
              variant="ghost"
              className="w-full justify-start gap-3 text-[11px] font-bold text-[#746d8a] hover:text-white hover:bg-white/5 px-3 py-2 rounded-md h-auto"
            >
              <Trophy className="w-4 h-4 text-[#746d8a]" />
              Jackpot
            </Button>

            {/* Active Coinflip Item */}
            <Button
              variant="ghost"
              className="w-full justify-start gap-3 text-[11px] font-bold text-[#9d63fa] bg-[#1f1635] hover:bg-[#2a1d45] px-3 py-2 rounded-md h-auto border border-[#9d63fa]/20 relative overflow-hidden"
            >
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#9d63fa] rounded-l-md" />
              <Coins className="w-4 h-4 text-[#9d63fa]" />
              Coinflip
            </Button>

            <Button
              variant="ghost"
              className="w-full justify-start gap-3 text-[11px] font-bold text-[#746d8a] hover:text-white hover:bg-white/5 px-3 py-2 rounded-md h-auto"
            >
              <ArrowUpDown className="w-4 h-4 text-[#746d8a]" />
              Upgrader
            </Button>
          </CollapsibleContent>
        </Collapsible>
      </div>

      {/* Support Section */}
      <div className="bg-[#120c1d] rounded-lg border border-white/5 mx-0.5 mb-3 overflow-hidden p-1">
        <Collapsible open={supportOpen} onOpenChange={setSupportOpen} className="w-full">
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              className="w-full justify-between items-center text-[11px] font-bold text-white hover:bg-white/5 px-3 py-2 rounded-md h-auto mb-1"
            >
              Support
              {supportOpen ? (
                <ChevronUp className="w-3.5 h-3.5 text-[#9d63fa]" />
              ) : (
                <ChevronDown className="w-3.5 h-3.5 text-[#5e5e70]" />
              )}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="flex flex-col gap-1 pb-1">
            <Button
              variant="ghost"
              className="w-full justify-start gap-3 text-[11px] font-bold text-[#746d8a] hover:text-white hover:bg-white/5 px-3 py-2 rounded-md h-auto"
            >
              <Monitor className="w-4 h-4 text-[#746d8a]" />
              Support
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start gap-3 text-[11px] font-bold text-[#746d8a] hover:text-white hover:bg-white/5 px-3 py-2 rounded-md h-auto"
            >
              <FileText className="w-4 h-4 text-[#746d8a]" />
              Blog
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start gap-3 text-[11px] font-bold text-[#746d8a] hover:text-white hover:bg-white/5 px-3 py-2 rounded-md h-auto"
            >
              <History className="w-4 h-4 text-[#746d8a]" />
              History
            </Button>
          </CollapsibleContent>
        </Collapsible>
      </div>

      {/* Footer */}
      <div className="mt-auto px-1 pt-3 pb-1">
        {/* Logo Area */}
        <div className="flex flex-col items-start gap-2 mb-4">
          <img src="/logo.svg" alt="Splitter" className="w-[100px] h-auto" />
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4 mb-4 mt-2 pl-1">
          <Youtube className="w-4 h-4 text-[#5e5e70] hover:text-white cursor-pointer transition-colors" />
          <span className="w-4 h-4 flex items-center justify-center text-[#5e5e70] hover:text-white cursor-pointer transition-colors text-base font-bold">𝕏</span>
          <Disc className="w-4 h-4 text-[#5e5e70] hover:text-white cursor-pointer transition-colors" />
          <Instagram className="w-4 h-4 text-[#5e5e70] hover:text-white cursor-pointer transition-colors" />
        </div>

        <div className="pl-1">
          <p className="text-[10px] font-bold text-white mb-0.5">Contact us at <span className="text-[#9059e1]">support@splitter.gg</span></p>
          <p className="text-[10px] font-medium text-[#5e5e70]">@2024 Splitter.gg All rights Reserved</p>
        </div>
      </div>
    </div>
  );
}