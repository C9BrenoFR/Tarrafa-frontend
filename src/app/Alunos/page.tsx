import { Suspense } from 'react';
import AlunosPageClient from './AlunosPageClient';

export default function Page() {
  return (
    <Suspense fallback={<div>Carregando alunos do curso...</div>}>
      <AlunosPageClient />
    </Suspense>
  );
}