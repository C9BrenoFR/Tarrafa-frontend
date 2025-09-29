import Indicators from './Indicator/Indicators';
import Ranking_Melhor_Desempenhos from './Ranking_Melhor_Desempenhos/Ranking_Melhor_Desempenhos';
import Ranking_Piores_Desempenhos from './Ranking_Piores_Desempenhos/Ranking_Piores_Desempenhos';
import DadosGerais from './DadosGerais/DadosGerais';

export default function Home() {

  return (
    <div className="flex-1 flex justify-center items-center pl-[240px]">
      <div className="BoxCurso">
        <div className="flex flex-row justify-between items-start w-full">
          <div className="flex flex-col items-start">
            <h1 className="text-xl font-poppins font-semibold text-left">Visão Geral</h1>
      
              <p style={{ color: '#374DAA' }} className="text-left text-xl font-semibold">
              das Disciplinas
              </p>
          </div>
 
        </div>
        <div>
            <div className="center-wrapper flex flex-col justify-between">
              <Indicators  />
              <div className="flex flex-row space-x-3">
                <Ranking_Melhor_Desempenhos  />
                <Ranking_Piores_Desempenhos  />
              </div>
                <DadosGerais />
            </div>
        </div>
      </div>
    </div>
  );
}
