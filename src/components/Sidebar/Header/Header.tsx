'use client';

import Link from 'next/link';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

interface Curso {
  id: string;
  nome: string;
  data: string;
}

interface HeaderProps {
  cursos: Curso[];
  onCursoChange: (cursoId: string) => void;
  cursoSelecionado: string | null;
}

export default function Header({ cursos, onCursoChange }: HeaderProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCursoId = e.target.value;
    onCursoChange(selectedCursoId);
    router.push(`?id=${selectedCursoId}`);
  };

  const cursoIdFromUrl = searchParams.get("id") || "";

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
          defaultValue={cursos.find((curso) => curso.id === cursoIdFromUrl)?.id || ''}
          onChange={handleChange}
          required
        >
          <option value="" disabled hidden>
            Escolha a disciplina
          </option>
          {cursos.map((curso) => (
            <option key={curso.id} value={curso.id}>
              {curso.id}-{curso.data}-A
            </option>
          ))}
        </select>
      </div>
    </header>
  );
}
