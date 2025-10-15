import { Suspense } from 'react';
import CursoPageClient from './CursoPageClient';

export default function Page() {
  return (
    <Suspense fallback={<div>Carregando curso...</div>}>
      <CursoPageClient />
    </Suspense>
  );
}
