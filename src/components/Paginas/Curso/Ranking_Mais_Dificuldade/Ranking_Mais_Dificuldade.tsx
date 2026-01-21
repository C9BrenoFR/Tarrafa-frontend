import { RankingContent } from '@/types/ranking';
import { useEffect, useState } from 'react';
import { api } from '@/utils/api';
import Loading from '@/components/ui/loading';
import { useError } from '@/hooks/useError';
import BoxTemplate from '@/components/ui/box-template';
import RankingItem from '@/components/ui/rank-item';
import { UserRoundSearch } from 'lucide-react';

interface Ranking_Mais_DificuldadeProps {
  id: number
}

export default function Ranking_Mais_Dificuldade({ id }: Ranking_Mais_DificuldadeProps) {
  const [ranking, setRanking] = useState<RankingContent[]>([])
  const error = useError()

  useEffect(() => {
    const fetch = async () => {
      try {
        error.clear()
        const response = await api.get(`analysis/subject/${id}/rankings?type=at-risk`)
        const ranking_vector = response.data.data.ranking
        setRanking(ranking_vector)
        if (ranking_vector.length < 1)
          error.setError("A turma não possui alunos o suficiente para criar um ranking")
      } catch (err) {
        error.setError("Erro ao buscar ranking de dificuldade")
        console.error("Erro ao buscar ranking de dificuldade: ", err)
      }
    }
    fetch()
  }, [id, error.clear, error.setError])
  return (
    <BoxTemplate
      title='Ranking'
      sub_title="Alunos com Mais Dificuldades"
    >
      {error.hasError ? (
        error.renderError()
      ) : ranking.length <= 0 && (
        <Loading>Carregando ranking</Loading>
      )}
      {ranking.map((item, index) => (
        <RankingItem
          position={index + 1}
          content={item.student}
          link={`/Curso/${id}/Aluno/${item.user_id}`}
          icon={UserRoundSearch}
        />
      ))}
    </BoxTemplate>
  );
}
