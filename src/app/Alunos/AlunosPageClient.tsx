'use client';

import Alunos from '@/components/Paginas/Alunos/Alunos';
import Header from '@/components/Sidebar/Header/Header';
import Sidebar from '@/components/Sidebar/Header/Sidebar';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { getAlunos, getCursos } from '@/utils/mocks';

const alunosMock = getAlunos();
const cursosMock = getCursos();

export default function AlunosPageClient() {
    const [cursoSelecionado, setCursoSelecionado] = useState<number | null>(null);
    const searchParams = useSearchParams();

    useEffect(() => {
        const idFromURL = searchParams.get('id');
        if (idFromURL) {
            const idNumber = parseInt(idFromURL, 10);
            setCursoSelecionado(idNumber);
        }
    }, [searchParams]);

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <Header cursos={cursosMock} onCursoChange={setCursoSelecionado} cursoSelecionado={cursoSelecionado} />
                <main>
                    <Alunos cursos={cursosMock} alunos={alunosMock} cursoSelecionado={cursoSelecionado} />
                </main>
            </div>
        </div>
    );
}
