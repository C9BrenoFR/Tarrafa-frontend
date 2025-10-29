import Loading from "@/components/ui/loading";
import { useError } from "@/hooks/useError";
import { api } from "@/utils/api";
import { useEffect, useState } from "react";

interface DadosGeraisProps {
  id: number;
}
type GeneralData = {
  total_enrolled: number
  taxa_aprovacao: number
  avg_grade_all: number
}

export default function DadosGerais({ id }: DadosGeraisProps) {
  const [data, setData] = useState<GeneralData | null>(null)
  const error = useError()

  useEffect(() => {
    async function fetchData() {
      try {
        error.clear()
        const response = await api.get(`analysis/subject/${id}/summary`)
        setData(response.data.data.metrics)
      } catch (err) {
        error.setError("Erro ao buscar dados gerais")
        console.error("Erro ao buscar dados gerais: ", err)
      }
    };
    fetchData();
  }, [id, error.clear, error.setError]);
  return (
    <div className="Box2 mt-5">
      <div className="mb-14">
        <div className="maincurso">
          <div className="mt-10 ml-10 mb-5">
            <h1 className="text-xl font-poppins font-semibold text-left">
              Dados Gerais
            </h1>
            <p style={{ color: "#9291A5" }}>da disciplina</p>
          </div>
        </div>
        <div className="relative after:absolute after:bottom-0 after:left-1/2 after:translate-x-[-50%] after:w-[90%] after:h-[1px] after:bg-gray-200 bg-white" />
      </div>

      <div className="flex items-center justify-center">
        {error.hasError ? (
          error.renderError()
        ) : data ? (
          <div className="flex flex-row justify-between items-center space-x-45">
            <div className="flex flex-row items-center">
              <p className="text-base text-gray-600 mb-2 text-left mr-6">
                Total de<br />estudantes <br /> matriculados
              </p>
              <div className="w-20 h-12 bg-gray-100 flex items-center justify-center rounded text-base ">
                {data.total_enrolled}
              </div>
            </div>

            <div className="flex flex-row items-center">
              <p className="text-base text-gray-600 mb-2 text-left mr-6">
                Média das<br />notas finais <br />da disciplina
              </p>
              <div className="w-20 h-12 bg-gray-100 flex items-center justify-center rounded text-base ">
                {data.avg_grade_all}
              </div>
            </div>

            <div className="flex flex-row items-center">
              <p className="text-base text-gray-600 mb-2 text-left mr-6">
                Taxa de <br />aprovação <br />da disciplina
              </p>
              <div className="w-20 h-12 bg-gray-100 flex items-center justify-center rounded text-base">
                {data.taxa_aprovacao}%
              </div>
            </div>
          </div>
        ) : (
          <div className="m-5">
            <Loading>Buscando dados</Loading>
          </div>
        )}
      </div>
    </div>
  );
}
