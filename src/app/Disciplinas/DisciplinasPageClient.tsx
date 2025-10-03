'use client';

import Disciplinas from '@/components/Paginas/Disciplinas/Disciplinas';
import Header from '@/components/Sidebar/Header/Header';
import Sidebar from '@/components/Sidebar/Header/Sidebar';
import { getCursos } from '@/utils/mocks';

const cursosMock = getCursos();

export default function DisciplinasPageClient() {

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header cursos={cursosMock} />
        <main>
          <Disciplinas disciplinas={cursosMock} />
        </main>
      </div>
    </div>
  );
}
