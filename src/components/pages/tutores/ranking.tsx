import { useEffect, useState } from 'react';
import { useError } from '@/hooks/useError';
import { api } from '@/utils/api';
import BoxTemplate from '@/components/ui/box-template';
import Loading from '@/components/ui/loading';
import RankingItem from '@/components/ui/rank-item';
import { Search } from 'lucide-react';

interface HomeRankingProps {
    type: 'at-risk' | 'best-performance'
}

export default function HomeRanking({ type }: HomeRankingProps) {
    const [ranking, setRanking] = useState<any[]>([])
    const error = useError()

    useEffect(() => {
        const fetch = async () => {
            try {
                error.clear()
                const response = await api.get(`analysis/tutors/general/rankings?type=${type}`)
                const ranking_vector = response.data.data.ranking
                setRanking(ranking_vector)
                if (ranking_vector.length < 1)
                    error.setError("Sem tutores o suficiente para criar um ranking")
            } catch (err) {
                error.setError("Erro ao buscar ranking desempenho")
                console.error("Erro ao buscar ranking desempenho: ", err)
            }
        }
        fetch()
    }, [error.clear, error.setError])

    return (
        <BoxTemplate
            title='Ranking'
            sub_title={type == 'best-performance' ? "Tutores com Melhores Desempenho" : "Tutores com Piores Desempenho"}
        >
            {error.hasError ? (
                error.renderError()
            ) : ranking.length <= 0 && (
                <Loading>Carregando ranking</Loading>
            )}
            {ranking.map((item, index) => (
                <RankingItem
                    key={index}
                    position={index + 1}
                    content={item.full_name}
                    link={`/tutores/curso/${item.subjects[0]}/${item.tutor_id}`}
                    icon={Search}
                />
            ))}
        </BoxTemplate>
    );
}
