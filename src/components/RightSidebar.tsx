import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Users, Settings, Briefcase, HelpCircle, Shield, Smile, Send, Disc } from 'lucide-react';
import { ChatMessage } from './ChatMessage';
import type { ChatMessage as ChatMessageType, Player, Giveaway as GiveawayType } from '../types/schema';

// Mock Props for now to ensure it works standalone if needed
interface RightSidebarProps {
  chatMessages: ChatMessageType[];
  currentUser: Player;
  userCount: number;
  giveaway: GiveawayType;
  raffleInfo?: any; // Keeping for compatibility but unused in new design
}

export function RightSidebar({ chatMessages, currentUser, userCount, giveaway }: RightSidebarProps) {
  const [activeTab, setActiveTab] = useState<'main' | 'spanish'>('main');

  return (
    <div className="w-[280px] bg-[#07070f] flex flex-col border-l border-white/5 h-full">

      {/* Top Header: Inventory, Profile, Settings */}
      <div className="flex items-start justify-between p-3 pb-1">
        {/* Inventory / Backpack */}
        <div className="relative group cursor-pointer hover:opacity-80 transition-opacity">
          <div className="w-[34px] h-[34px] bg-[#1f1732] rounded-lg flex items-center justify-center border border-white/5">
            <Briefcase className="w-4 h-4 text-[#746d8a]" />
          </div>
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#9d63fa] rounded-full flex items-center justify-center border-[2px] border-[#07070f]">
            <span className="text-[8px] font-bold text-white">10</span>
          </div>
        </div>

        {/* Profile */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1.5 mb-0.5">
            <Avatar className="w-[26px] h-[26px] rounded-md border-2 border-[#1f1732]">
              <AvatarImage src={currentUser.avatar} className="object-cover" />
              <AvatarFallback className="bg-[#1f1732] text-white text-[10px]">{currentUser.username[0]}</AvatarFallback>
            </Avatar>
            <span className="text-[12px] font-bold text-white">{currentUser.username}</span>
          </div>
          {/* Level Progress */}
          <div className="w-[100px] h-[3px] bg-[#1f1732] rounded-full overflow-hidden">
            <div className="w-[60%] h-full bg-[#9d63fa] rounded-full" />
          </div>
        </div>

        {/* Settings */}
        <div className="w-[34px] h-[34px] bg-[#1f1732] rounded-lg flex items-center justify-center border border-white/5 cursor-pointer hover:bg-[#2a2040] transition-colors">
          <Settings className="w-4 h-4 text-[#746d8a]" />
        </div>
      </div>

      {/* Tabs: Main Chat / Spanish Chat */}
      <div className="px-3 py-1.5">
        <div className="flex items-center bg-[#120c1d] p-0.5 rounded-lg border border-white/5">
          <button
            onClick={() => setActiveTab('main')}
            className={`flex-1 py-1.5 text-[11px] font-bold rounded-md transition-all ${activeTab === 'main' ? 'bg-[#9d63fa] text-white shadow-sm' : 'text-[#5e5e70] hover:text-white'}`}
          >
            Main Chat
          </button>
          <button
            onClick={() => setActiveTab('spanish')}
            className={`flex-1 py-1.5 text-[11px] font-bold rounded-md transition-all ${activeTab === 'spanish' ? 'bg-[#9d63fa] text-white shadow-sm' : 'text-[#5e5e70] hover:text-white'}`}
          >
            Spanish Chat
          </button>
        </div>
      </div>

      {/* User Count */}
      <div className="px-4 py-1 flex items-center justify-between">
        <span className="text-[10px] font-bold text-white">User Count:</span>
        <div className="flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-[#eab308] animate-pulse" />
          <Users className="w-3 h-3 text-[#eab308]" />
          <span className="text-[10px] font-bold text-[#eab308]">{userCount}</span>
        </div>
      </div>

      {/* Content Area (Giveaway + Messages) */}
      <div className="flex-1 overflow-hidden flex flex-col px-3 relative">

        {/* Giveaway Card */}
        {activeTab === 'main' && (
          <div className="mb-2 relative shrink-0">
            <div className="absolute inset-0 bg-gradient-to-r from-[#9d63fa]/20 to-transparent blur-xl opacity-50" />
            <Card className="bg-[#120c1d] border-white/5 p-2.5 rounded-lg relative overflow-hidden group">
              <div className="flex justify-between items-start">
                <div className="z-10">
                  <h3 className="text-[12px] font-bold text-white mb-0.5">{giveaway.title}</h3>
                  <div className="flex items-center gap-1 mb-2">
                    <span className="text-[10px] font-medium text-[#746d8a]">Live</span>
                    <HelpCircle className="w-2.5 h-2.5 text-[#746d8a]" />
                    <div className="w-1 h-1 bg-[#9d63fa] rounded-full ml-0.5 animate-pulse" />
                  </div>
                  <Button className="h-[26px] bg-[#9d63fa] hover:bg-[#8b55e0] text-white text-[10px] font-bold px-4 rounded-md shadow-sm">
                    Join
                  </Button>
                </div>
                {/* Abstract background shape for card */}
                <div className="absolute right-0 top-0 bottom-0 w-[60px] bg-gradient-to-l from-[#1f1732] to-transparent opacity-50" />
                <div className="w-[40px] h-[40px] bg-[#07070f] rounded-md border border-white/5 absolute right-3 top-3" />
              </div>
              {/* Progress bar at bottom of card */}
              <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#9d63fa]" />
            </Card>
          </div>
        )}

        {/* Chat Messages */}
        <ScrollArea className="flex-1 -mx-3 px-3">
          <div className="flex flex-col pb-2 pt-1 gap-0.5">
            {activeTab === 'main' ? (
              chatMessages.map((msg) => (
                <ChatMessage key={msg.id} message={msg} />
              ))
            ) : (
              <div className="text-center text-[#5e5e70] text-[11px] mt-8">Spanish chat is empty...</div>
            )}
          </div>
        </ScrollArea>

        {/* Fade overlay at bottom of chat */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#07070f] to-transparent pointer-events-none" />
      </div>

      {/* Footer / Input Area */}
      <div className="p-3 pt-1 mt-auto bg-[#07070f]">
        {/* Input Box */}
        <div className="bg-[#120c1d] p-1 rounded-lg border border-white/5 flex items-center gap-1.5 mb-2">
          <Input
            placeholder="Message..."
            className="flex-1 bg-transparent border-none text-[12px] font-medium text-white placeholder:text-[#5e5e70] focus-visible:ring-0 px-2 h-[30px]"
          />
          <div className="flex items-center gap-1 pr-1">
            <button className="w-[28px] h-[28px] flex items-center justify-center rounded-md hover:bg-white/5 transition-colors group">
              <Smile className="w-4 h-4 text-[#4ade80] group-hover:scale-110 transition-transform" />
            </button>
            <button className="w-[28px] h-[28px] bg-[#9d63fa] hover:bg-[#8b55e0] flex items-center justify-center rounded-md shadow-md transition-all hover:scale-105 active:scale-95">
              <Send className="w-3 h-3 text-white" />
            </button>
          </div>
        </div>

        {/* Chat Rules / Socials */}
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-1.5 cursor-pointer hover:text-white transition-colors group">
            <Shield className="w-3.5 h-3.5 text-[#9d63fa]" />
            <span className="text-[10px] font-bold text-white group-hover:underline">Chat Rules</span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="text-[#9d63fa] hover:text-white cursor-pointer font-bold text-[14px] transition-colors">𝕏</span>
            <Disc className="w-3.5 h-3.5 text-[#9d63fa] hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>
      </div>

    </div>
  );
}