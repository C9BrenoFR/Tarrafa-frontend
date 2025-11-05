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

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <Header id={curso.id} cursos={cursos} />
                <main>
                    <Alunos curso={curso} />
                </main>
            </div>
        </div>
    );
}
