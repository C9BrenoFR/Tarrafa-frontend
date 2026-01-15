'use client';

import Curso from '@/components/Paginas/Curso/Curso';
import Header from '@/components/Sidebar/Header/Header';
import Sidebar from '@/components/Sidebar/Header/Sidebar';
import { useCookie } from '@/hooks/useCookie';
import { Curso as CursoType } from '@/types/curso';

interface CursoPageClientProps {
  cursos: CursoType[]
  curso: CursoType
}

export default function CursoPageClient({ cursos, curso }: CursoPageClientProps) {
  const [savedCourse, setCourse, deleteCourse, setCourseOnly] = useCookie<CursoType | null>('course', null)
  setCourseOnly(curso)

  return (<Curso curso={curso} />);
}
