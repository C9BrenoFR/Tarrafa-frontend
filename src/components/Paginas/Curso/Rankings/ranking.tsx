import Ranking_Mais_Dificuldade from "../Ranking_Mais_Dificuldade/Ranking_Mais_Dificuldade";
import Ranking_Melhor_Desempenho from "../Ranking_Melhor_Desempenho/Ranking_Melhor_Desempenho";

interface RankingProps {
    id: number
}

export default function Rankings({ id }: RankingProps) {
    return (
        <div className="flex flex-row space-x-5">
            <Ranking_Melhor_Desempenho id={id} />
            <Ranking_Mais_Dificuldade id={id} />
        </div>
    );
};
