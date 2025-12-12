import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { GameCard } from './components/GameCard';
import { RightSidebar } from './components/RightSidebar';
import { Button } from './components/ui/button';
import { Coins } from 'lucide-react';
import { mockGames, mockChatMessages, mockRaffleInfo, mockGiveaway, mockCurrentUser } from './data/mockData';

function App() {
  const userBalance = 108.35;
  const userCount = 874;

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden relative">
        {/* Header */}
        <Header currentUser={mockCurrentUser} balance={userBalance} />

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto bg-[#07070f] scrollbar-hide">
          <div className="max-w-[1200px] mx-auto p-6">

            {/* Top Purple Decorative Bar */}
            <div className="w-full h-[32px] bg-[#9d63fa] rounded-t-2xl rounded-tr-none mb-8 relative overflow-hidden shadow-[0_0_20px_rgba(157,99,250,0.3)]">
              {/* Optional subtle pattern or gradient/shine if needed */}
              <div className="absolute top-0 right-0 w-[200px] h-full bg-gradient-to-l from-white/20 to-transparent pointer-events-none" />
            </div>

            {/* Coinflip Header Section (On Dark Background) */}
            <div className="flex items-end justify-between mb-6 px-2">
              {/* Left: Title & Subtitle */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3">
                  <Coins className="w-7 h-7 text-white" /> {/* Icon color adjusted to white/standard */}
                  <h1 className="text-[26px] font-black text-white tracking-tight">Coinflip</h1>
                </div>
                <p className="text-[13px] font-bold text-[#746d8a] pl-10">The Classic 50/50 game mode.</p>
              </div>

              {/* Right: Actions */}
              <div className="flex items-center gap-4">
                {/* H/T Toggles */}
                <div className="flex items-center gap-3 mr-2">
                  {/* H Toggle - Purple Circle */}
                  <button className="w-[36px] h-[36px] rounded-full bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-black text-[15px] flex items-center justify-center shadow-lg transition-transform hover:scale-110">
                    H
                  </button>
                  {/* T Toggle - Yellow Circle */}
                  <button className="w-[36px] h-[36px] rounded-full bg-[#fbbf24] hover:bg-[#f59e0b] text-[#1f1732] font-black text-[15px] flex items-center justify-center shadow-lg transition-transform hover:scale-110">
                    T
                  </button>
                </div>

                {/* Create Game Button */}
                <Button className="h-[42px] bg-[#b084ff] hover:bg-[#c099ff] text-white font-bold text-[13px] px-6 rounded-lg shadow-lg transition-all hover:-translate-y-0.5">
                  Create Game
                </Button>
              </div>
            </div>

            {/* Game Cards */}
            <div className="flex flex-col gap-[12px]">
              {mockGames.map((game) => (
                <GameCard
                  key={game.id}
                  game={game}
                  onJoinGame={() => console.log('Join game:', game.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <RightSidebar
        raffleInfo={mockRaffleInfo}
        giveaway={mockGiveaway}
        chatMessages={mockChatMessages}
        currentUser={mockCurrentUser}
        userCount={userCount}
      />
    </div>
  );
}

export default App;