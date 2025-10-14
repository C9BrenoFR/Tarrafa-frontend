import { useEffect, useState } from 'react';
import RenderizaAlunos from '../RenderizaAlunos';
import { RankingContent } from '@/types/ranking';
import { api } from '@/utils/api';
import Loading from '@/components/ui/loading';

interface Ranking_Melhor_DesempenhoProps {
    id: number
}

export default function Ranking_Melhor_Desempenho({ id }: Ranking_Melhor_DesempenhoProps) {
    const [ranking, setRanking] = useState<RankingContent[]>([])
    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await api.get(`analysis/subject/${id}/rankings?type=best-performance`)
                setRanking(response.data.data.ranking)
            } catch (e) {
                console.error("Erro ao buscar ranking de dificuldade: ", e)
            }
        }
        fetch()
    }, [id])
    return (
        <div className="Box mb-10">
            <div className="Boxcursopequeno">
                <div className="mt-10 ml-10 mb-5">
                    <h1 className="text-xl font-poppins font-semibold text-left">Ranking</h1>
                    <p style={{ color: "#9291A5" }}>Alunos com Melhor Desempenho</p>
                </div>
            </div>
            <div className="relative after:absolute after:bottom-0 after:left-1/2 after:translate-x-[-50%] after:w-[90%] after:h-[1px] after:bg-gray-200 after:shadow-[0_2px_4px_rgba(0,0,0,0.05)] bg-white" />
            <div className='m-10'>
                {ranking.length > 0 ? (
                    <RenderizaAlunos id={id} ranking={ranking} />
                ) : (
                    <Loading>Carregando Ranking</Loading>
                )}
            </div>
        </div>
    );
}
