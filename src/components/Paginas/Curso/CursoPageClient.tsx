'use client';

import Curso from '@/components/Paginas/Curso/Curso';
import Header from '@/components/Sidebar/Header/Header';
import Sidebar from '@/components/Sidebar/Header/Sidebar';
import { Curso as CursoType } from '@/types/curso';

interface CursoPageClientProps {
  cursos: CursoType[]
  curso: CursoType
}

export default function CursoPageClient({ cursos, curso }: CursoPageClientProps) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header id={curso.id} cursos={cursos} />
        <main>
          <Curso curso={curso} />
        </main>
      </div>
    </div>
  );
}
