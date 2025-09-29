import Link from 'next/link';
import { FaPlus } from 'react-icons/fa';

interface Aluno {
    id: string;
    label: string;
    value: number;
}

interface RenderizaAlunosProps {
    alunos: Aluno[];
    cursoSelecionado: string | null;
}

export default function RenderizaAlunos({ alunos, cursoSelecionado }: RenderizaAlunosProps) {
    const alunosOrdenados = [...alunos]
        .sort((a, b) => b.value - a.value)
        .slice(0, 5);
    return (
        <div className="bg-white rounded-lg p-4 space-y-4">
            {alunosOrdenados.map((aluno, index) => (
                <div
                    key={aluno.value}
                    className="flex items-center justify-between px-6 py-5 bg-white shadow-sm rounded-md"
                >
                    <span className="w-6 text-left font-medium text-gray-700">
                        {index + 1}
                    </span>
                    <span className="flex-1 text-left text-gray-800">{aluno.label}</span>
                    <button className="text-gray-700 cursor-pointer hover:text-gray-900">
                        <Link
                            href={{
                                pathname: '/Aluno',
                                query: {
                                    cursoid: cursoSelecionado,
                                    alunoId: aluno.id,
                                }
                            }}
                        >
                            <FaPlus className='text-2xl text-gray-700' />
                        </Link>
                    </button>
                </div>
            ))}
        </div>
    );
}
