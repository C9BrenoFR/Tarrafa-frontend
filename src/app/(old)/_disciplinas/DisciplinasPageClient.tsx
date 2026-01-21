'use client';

import Disciplinas from '@/components/pages/Disciplinas/Disciplinas';
import Header from '@/components/sidebar/Header/Header';
import Sidebar from '@/components/ui/sidebar';
import { getCursos } from '@/utils/mocks';

const cursosMock = getCursos();

export default function DisciplinasPageClient() {

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header id={1} cursos={[]} />
        <main>
          <Disciplinas disciplinas={[]} />
        </main>
      </div>
    </div>
  );
}
