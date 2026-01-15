'use client';

import Alunos from '@/components/Paginas/Alunos/Alunos';
import Header from '@/components/Sidebar/Header/Header';
import Sidebar from '@/components/Sidebar/Header/Sidebar';
import { useCookie } from '@/hooks/useCookie';
import { Curso as CursoType } from '@/types/curso';

interface AlunosPageClientProps {
    cursos: CursoType[]
    curso: CursoType
}

export default function AlunosPageClient({ curso, cursos }: AlunosPageClientProps) {
    const [savedCourse, setCourse, deleteCourse, setCourseOnly] = useCookie<CursoType | null>('course', null)
    setCourseOnly(curso)

    return (<Alunos curso={curso} />
    );
}
