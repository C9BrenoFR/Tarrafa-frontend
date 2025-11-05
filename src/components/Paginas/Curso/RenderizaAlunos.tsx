import { RankingContent } from '@/types/ranking';
import { UserRoundSearch } from 'lucide-react';
import Link from 'next/link';

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
                    <span className="flex-1 text-left text-gray-800">{item.student}</span>
                    <button className="text-gray-700 cursor-pointer hover:text-gray-900">
                        <Link
                            href={`/Curso/${id}/Aluno/${item.user_id}`}
                        >
                            <UserRoundSearch className='text-2xl text-gray-700' />
                        </Link>
                    </button>
                </div>
            ))}
        </div>
    );
}
