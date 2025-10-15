'use client';

import { useState, Suspense } from 'react';
import Header from '@/components/Sidebar/Header/Header';
import Sidebar from '@/components/Sidebar/Header/Sidebar';
import Home from '@/components/Paginas/Homepage/Home';
import { getCursos } from '@/utils/mocks';

const cursosMock = getCursos();

export default function HomeLayout() {
  const [cursoSelecionado, setCursoSelecionado] = useState<number | null>(null);

  return (
    <Suspense fallback={<div>Carregando curso...</div>}>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Header id={1} cursos={cursosMock} />
          <main>
            <Home />
          </main>
        </div>
      </div>
    </Suspense>
  );
}
