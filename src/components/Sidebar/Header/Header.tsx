'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Curso } from '@/types/curso';
import { getCourses } from '@/utils/api';
import { useEffect } from 'react';

interface HeaderProps {
  id: number
  cursos?: Curso[] | null
}

export default function Header({ id, cursos }: HeaderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const currentBasePath = '/' + pathname.split('/')[1];

  useEffect(() => {
    const checkCourses = async () => {
      if (!cursos)
        cursos = await getCourses()
    }
    checkCourses()
  }, [cursos])

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCursoId = e.target.value;
    if (selectedCursoId) {
      if (currentBasePath === '/')
        router.push(`/Curso/${selectedCursoId}`);
      router.push(`${currentBasePath}/${selectedCursoId}`)
    }
  };


  const getLinkClass = (path: string) => {
    return currentBasePath === path
      ? 'px-4 py-2 rounded bg-[#707FDD] text-white hover:bg-[#374DAA] transition'
      : 'px-4 py-2 rounded text-gray-700 hover:bg-gray-100 transition';
  };

  return (
    <header className="header">
      <div className="componentsheader space-x-2">
        <Link href="/" className={getLinkClass('/')}>Home</Link>
        <Link href="/Curso" className={getLinkClass('/Curso')}>Disciplina</Link>
        <Link href="/Alunos" className={getLinkClass('/Alunos')}>Alunos</Link>

        {cursos ? (
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
                {curso.shortname}-{curso.period}-A
              </option>
            ))}
          </select>
        ) : (
          null
        )}
      </div>
    </header>
  );
}