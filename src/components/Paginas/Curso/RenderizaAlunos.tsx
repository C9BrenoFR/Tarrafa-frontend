import { AlunoType } from '@/types/aluno';
import { RankingContent } from '@/types/ranking';
import Link from 'next/link';
import { FaPlus } from 'react-icons/fa';

interface RenderizaAlunosProps {
    ranking: RankingContent[]
    id: number
}

export default function RenderizaAlunos({ ranking, id }: RenderizaAlunosProps) {

    return (
        <div className="bg-white rounded-lg p-4 space-y-4">
            {ranking.map((item, index) => (
                <div
                    key={index}
                    className="flex items-center justify-between px-6 py-5 bg-white shadow-sm rounded-md"
                >
                    <span className="w-6 text-left font-medium text-gray-700">
                        {index + 1}
                    </span>
                    <span className="flex-1 text-left text-gray-800">{item.name}</span>
                    <button className="text-gray-700 cursor-pointer hover:text-gray-900">
                        <Link
                            href={{
                                pathname: '/Aluno',
                                query: {
                                    cursoId: id,
                                    alunoId: item.user_id,
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
