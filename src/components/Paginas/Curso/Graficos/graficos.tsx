import { api } from "@/utils/api";
import { useEffect, useState } from "react";
import Grafico from "./Atividades/Atividades";
import NumAbso from "./NumAbso/NumAbso";

interface GraficosProps {
    id: number
}

export default function Graficos({ id }: GraficosProps) {
    const [data, setData] = useState<GraphInfo>({
        id: id,
        situations: [],
        usage_by_module: []
    })

    useEffect(() => {
        async function fetch() {
            try {
                const response = await api.get(`analysis/subject/${id}/info_graphs`)
                setData(response.data.data.subject)
            } catch (error) {
                console.error(error)
            }
        };
        fetch();
    }, [id]);
    return (
        <div className="flex flex-row space-x-5">
            <Grafico graph_data={data.usage_by_module} />
            <NumAbso situations={data.situations} />
        </div>
    );
};
