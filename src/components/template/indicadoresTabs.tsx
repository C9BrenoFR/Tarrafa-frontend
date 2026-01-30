import { Aluno, Tab } from '@/types/aluno';
import { Tutor } from '@/types/tutor';
import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface ScrollableTabsProps {
  tabs: Tab[];
  activeTab: Tab;
  setTab: (tab: Tab) => void;
  setAlunos?: (alunos: Aluno[]) => void;
  setTutores?: (tutores: Tutor[]) => void;
}

const ScrollableTabs: React.FC<ScrollableTabsProps> = ({
  tabs,
  activeTab,
  setTab,
  setAlunos,
  setTutores
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -200, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 200, behavior: 'smooth' });
  };

  const onTabClick = (tab: Tab) => {
    setTab(tab)
    setAlunos?.([])
    setTutores?.([])
  }
  return (
    <div className="flex justify-between items-center gap-2 mb-2">
      <div className="flex items-center gap-1 max-w-full overflow-hidden">
        {tabs.length > 3 && <button
          onClick={scrollLeft}
          className="mr-3 rounded-lg border-1 border-gray-300 min-w-7 h-7 flex items-center justify-center hover:cursor-pointer hover:bg-gray-100 transition-colors"
        >
          <FaChevronLeft className="h-3 w-3 text-gray-500" />
        </button>}
        <div
          ref={scrollRef}
          className="flex gap-2 overflow-x-auto no-scrollbar scroll-smooth"
        >
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => onTabClick(tab)}
              className={`flex-shrink-0 rounded-lg px-4 py-2 border-2 transition-colors cursor-pointer ${activeTab === tab
                ? 'text-white bg-[#374DAA] border-[#374DAA]'
                : 'text-gray-800 bg-white border-gray-300 hover:bg-gray-100'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {tabs.length > 3 && <button
          onClick={scrollRight}
          className="mx-3 rounded-lg border-1 border-gray-300 min-w-7 h-7 flex items-center justify-center hover:cursor-pointer hover:bg-gray-50 transition-colors"
        >
          <FaChevronRight className="h-3 w-3 text-gray-500 font-bold" />
        </button>}
        
      </div>

    </div>
  );
};

export default ScrollableTabs;
