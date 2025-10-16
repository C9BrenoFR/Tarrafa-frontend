import { Suspense } from 'react';
import AlunoPageClient from './AlunoPageClient';

export default function Page() {
  return (
    <Suspense fallback={<div>Carregando dados do aluno...</div>}>
      <AlunoPageClient />
    </Suspense>
  );
}