import { useEffect, useState } from "react";
import Ranking_Mais_Dificuldade from "../Ranking_Mais_Dificuldade/Ranking_Mais_Dificuldade";
import Ranking_Melhor_Desempenho from "../Ranking_Melhor_Desempenho/Ranking_Melhor_Desempenho";
import { api } from "@/utils/api";
import { RankingInfo } from "@/types/ranking";

interface RankingProps {
    id: number
}

export default function Rankings({ id }: RankingProps) {
    const [data, setData] = useState<RankingInfo>({
        id: id,
        ranking_best: [],
        ranking_difficulties: []
    })

    useEffect(() => {
        async function fetch() {
            try {
                const response = await api.get(`analysis/ranking/${id}`)
                setData(response.data.data)
            } catch (error) {
                console.error(error)
            }
        };
        fetch();
    }, [id]);
    return (
        <div className="flex flex-row space-x-5">
            <Ranking_Melhor_Desempenho id={id} ranking={data.ranking_best} />
            <Ranking_Mais_Dificuldade id={id} ranking={data.ranking_difficulties} />
        </div>
    );
};
