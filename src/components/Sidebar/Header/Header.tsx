'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { getCursos } from '@/utils/mocks';
import { Curso } from '@/types/curso';

interface HeaderProps {
  id: number
  cursos?: Curso[] | null
}

export default function Header({ id, cursos }: HeaderProps) {
  const router = useRouter();

  if (!cursos)
    cursos = getCursos()

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCursoId = e.target.value;
    if (selectedCursoId)
      router.push(`/Curso/${selectedCursoId}`);
  };

  const pathname = usePathname();

  const getLinkClass = (path: string) => {
    return pathname === path
      ? 'px-4 py-2 rounded bg-[#707FDD] text-white hover:bg-[#374DAA] transition'
      : 'px-4 py-2 rounded text-gray-700 hover:bg-gray-100 transition';
  };

  return (
    <header className="header">
      <div className="componentsheader space-x-2">
        <Link href="/" className={getLinkClass('/')}>Home</Link>
        <Link href="/Curso" className={getLinkClass('/Curso')}>Disciplina</Link>
        <Link href="/Alunos" className={getLinkClass('/Alunos')}>Alunos</Link>

        <select
          id="curso"
          name="curso"
          className="select-classic"
          defaultValue={id}
          onChange={handleChange}
          required
        >
          <option value="">
            Escolha a disciplina
          </option>
          {cursos.map((curso) => (
            <option key={curso.id} value={curso.id}>
              {curso.shortname}-{curso.data}-A
            </option>
          ))}
        </select>
      </div>
    </header>
  );
}