import Indicators from './Indicator/Indicators';
import DadosGerais from './DadosGerais/DadosGerais';
import HomeRanking from './ranking';

export default function Home() {

  return (
    <div className="flex-1 flex justify-center items-center pl-[240px]">
      <div className="BoxCurso">
        <div className="flex flex-row justify-between items-start w-full">
          <div className="flex flex-col items-start">
            <h1 className="text-xl font-poppins font-semibold text-left">Visão Geral</h1>

            <p style={{ color: '#374DAA' }} className="text-left text-xl font-semibold">
              da Instituição
            </p>
          </div>

        </div>
        <div>
          <div className="center-wrapper flex flex-col justify-between">
            <Indicators />
            <div className="flex flex-row space-x-3">
              <HomeRanking type='best-performance' />
              <HomeRanking type='at-risk' />
            </div>
            <DadosGerais />
          </div>
        </div>
      </div>
    </div>
  );
}
