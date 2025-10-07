'use client';

import Indicators from './Indicator/Indicators';
import Grafico from './Atividades/Atividades';
import NumAbso from './NumAbso/NumAbso';
import Ranking_Melhor_Desempenho from './Ranking_Melhor_Desempenho/Ranking_Melhor_Desempenho';
import Ranking_Mais_Dificuldade from './Ranking_Mais_Dificuldade/Ranking_Mais_Dificuldade';
import DadosGerais from './DadosGerais/DadosGerais';
import { getCursos } from '../../../utils/mocks';
import { Curso as CursoType } from '@/types/curso';

type CursoProps = {
  curso: CursoType
};

export default function Curso({ curso }: CursoProps) {

  return (
    <div className="flex-1 flex justify-center items-center pl-[240px]">
      <div className="BoxCurso">
        <div className="flex flex-row justify-between items-start w-full">
          <div className="flex flex-col items-start">
            <h1 className="text-xl font-poppins font-semibold text-left">Disciplina</h1>
            <p style={{ color: '#374DAA' }} className="text-left text-xl font-semibold">
              {curso.nome}
            </p>
          </div>
          <div className="flex flex-col items-end">
            <>
              <p className="text-sm text-right">{curso.data}</p>
              <p className="text-xl text-right font-poppins font-semibold">{curso.shortname}</p>
            </>
          </div>
        </div>
        <div>
          <div className="center-wrapper flex flex-col justify-between">
            <DadosGerais cursoSelecionado={curso.id} />
            <Indicators cursoSelecionado={curso.id} />
            <div className="flex flex-row space-x-5">
              <Grafico cursoSelecionado={curso.id} />
              <NumAbso cursoSelecionado={curso.id} />
            </div>
            <div className="flex flex-row space-x-5">
              <Ranking_Melhor_Desempenho cursoSelecionado={curso.id} />
              <Ranking_Mais_Dificuldade cursoSelecionado={curso.id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}