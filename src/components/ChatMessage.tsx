import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import type { ChatMessage as ChatMessageType } from '../types/schema';

interface ChatMessageProps {
  message: ChatMessageType;
}

const getLevelColor = (level: number) => {
  if (level >= 100) return 'bg-[#4ade80] text-black'; // Green
  if (level >= 60) return 'bg-[#a855f7] text-white'; // Purple
  return 'bg-[#eab308] text-black'; // Yellow/Orange
};

export function ChatMessage({ message }: ChatMessageProps) {
  return (
    <div className="flex gap-2 mb-2 last:mb-0 group">
      <Avatar className="w-[26px] h-[26px] rounded-md border border-white/10 shrink-0 mt-0.5">
        <AvatarImage src={message.user.avatar} className="object-cover" />
        <AvatarFallback className="bg-[#1f1732] text-white text-[9px] font-bold">
          {message.user.username[0]}
        </AvatarFallback>
      </Avatar>

      <div className="flex flex-col gap-0.5 min-w-0 flex-1">
        <div className="flex items-center gap-1.5">
          <div className={`flex items-center justify-center h-[14px] min-w-[20px] px-0.5 rounded-[3px] text-[9px] font-black ${getLevelColor(message.user.level)}`}>
            {message.user.level}
          </div>
          <span className="text-[11px] font-bold text-white truncate max-w-[100px]">{message.user.username}</span>
        </div>

        <div className="bg-[#1f1732] p-2 rounded-lg rounded-tl-none text-[11px] font-medium text-[#c4c4d4] shadow-sm leading-snug break-words">
          {message.message}
        </div>
      </div>
    </div>
  );
}