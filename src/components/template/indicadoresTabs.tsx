import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface ScrollableTabsProps {
  tabs: string[];
  activeTab: string;
  onTabClick: (tab: string) => void;
}

const ScrollableTabs: React.FC<ScrollableTabsProps> = ({
  tabs,
  activeTab,
  onTabClick,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -200, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 200, behavior: 'smooth' });
  };

  return (
    <div className="flex justify-between items-center gap-2 mb-2">
      {/* Área dos botões com chevrons */}
      <div className="flex items-center gap-1 max-w-full overflow-hidden">
        {/* Chevron esquerdo */}
        <button
          onClick={scrollLeft}
          className="bg-white rounded-full p-1 shadow-md hover:bg-slate-100 h-6 flex-shrink-0"
        >
          <FaChevronLeft className="h-3 w-3 text-slate-600" />
        </button>

        {/* Tabs scrolláveis */}
        <div
          ref={scrollRef}
          className="flex gap-2 overflow-x-auto no-scrollbar scroll-smooth"
        >
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => onTabClick(tab)}
              className={`flex-shrink-0 rounded-lg px-4 py-2 border-2 transition-colors cursor-pointer ${
                activeTab === tab
                  ? 'text-white bg-[#374DAA] border-[#374DAA]'
                  : 'text-gray-800 bg-white border-gray-300 hover:bg-gray-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Chevron direito */}
        <button
          onClick={scrollRight}
          className="bg-white rounded-full p-1 shadow-md hover:bg-slate-100 h-6 flex-shrink-0"
        >
          <FaChevronRight className="h-3 w-3 text-slate-600" />
        </button>
      </div>

    </div>
  );
};

export default ScrollableTabs;
