'use client';

import Aluno from '@/components/pages/Aluno/Aluno';
import Header from '@/components/sidebar/Header/Header';
import Sidebar from '@/components/ui/sidebar';
import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { getAlunos } from '@/utils/mocks';

const alunosMock = getAlunos();

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
            router.push(`/alunos?cursoId=${cursoSelecionado}&alunoId=${alunoSelecionado}`);
        }
    }, [cursoSelecionado, alunoSelecionado, router]);

    return (
        <Aluno
            cursos={[]}
            cursoSelecionado={cursoSelecionado}
            alunos={alunosMock}
            alunoSelecionado={alunoSelecionado}
        />
    );
}