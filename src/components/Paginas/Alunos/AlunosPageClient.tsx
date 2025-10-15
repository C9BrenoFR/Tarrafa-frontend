'use client';

import Alunos from '@/components/Paginas/Alunos/Alunos';
import Header from '@/components/Sidebar/Header/Header';
import Sidebar from '@/components/Sidebar/Header/Sidebar';
import { Curso as CursoType } from '@/types/curso';
import { getAlunos } from '@/utils/mocks';

interface AlunosPageClientProps {
    cursos: CursoType[]
    curso: CursoType
}

export default function AlunosPageClient({ curso, cursos }: AlunosPageClientProps) {

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <Header id={curso.id} cursos={cursos} />
                <main>
                    <Alunos curso={curso} alunos={getAlunos()} />
                </main>
            </div>
        </div>
    );
}
