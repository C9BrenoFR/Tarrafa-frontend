'use client';

import Aluno from '@/components/Paginas/Aluno/Aluno';
import Header from '@/components/Sidebar/Header/Header';
import Sidebar from '@/components/Sidebar/Header/Sidebar';
import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { getAlunos, getCursos } from '@/utils/mocks';

const alunosMock = getAlunos();
const cursosMock = getCursos();

export default function AlunoPageClient() {
    const [cursoSelecionado, setCursoSelecionado] = useState<number | null>(null);
    const [alunoSelecionado, setAlunoSelecionado] = useState<number | null>(null);
    const searchParams = useSearchParams();
    const router = useRouter();

    useEffect(() => {
        const cursoIdFromURL = searchParams.get('cursoId');
        const alunoIdFromURL = searchParams.get('alunoId');

        if (cursoIdFromURL && alunoIdFromURL) {
            const cursoIdNumber = parseInt(cursoIdFromURL, 10);
            const alunoIdNumber = parseInt(alunoIdFromURL, 10);
            setCursoSelecionado(cursoIdNumber);
            setAlunoSelecionado(alunoIdNumber);
        }
    }, [searchParams]);

    useEffect(() => {
        if (cursoSelecionado && alunoSelecionado) {
            router.push(`/Aluno?cursoId=${cursoSelecionado}&alunoId=${alunoSelecionado}`);
        }
    }, [cursoSelecionado, alunoSelecionado, router]);

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <Header
                    id={cursoSelecionado ? cursoSelecionado : 1}
                    cursos={cursosMock}
                />
                <main>
                    <Aluno
                        cursos={cursosMock}
                        cursoSelecionado={cursoSelecionado}
                        alunos={alunosMock}
                        alunoSelecionado={alunoSelecionado} />
                </main>
            </div>
        </div>
    );
}