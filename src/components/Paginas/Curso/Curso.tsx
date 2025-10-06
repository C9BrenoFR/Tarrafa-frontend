'use client';

import Indicators from './Indicator/Indicators';
import Grafico from './Atividades/Atividades';
import NumAbso from './NumAbso/NumAbso';
import Ranking_Melhor_Desempenho from './Ranking_Melhor_Desempenho/Ranking_Melhor_Desempenho';
import Ranking_Mais_Dificuldade from './Ranking_Mais_Dificuldade/Ranking_Mais_Dificuldade';
import DadosGerais from './DadosGerais/DadosGerais';
import { getCursos } from '../../../utils/mocks';
import { DisciplinaType } from '@/types/disciplina';

type CursoProps = {
  cursos: DisciplinaType[];
  cursoSelecionado: number | null;
};

export default function Curso({ cursoSelecionado }: CursoProps) {
  const cursos = getCursos();

  const curso = cursos.find(c => c.id === cursoSelecionado);

  return (
    <div className="flex-1 flex justify-center items-center pl-[240px]">
      <div className="BoxCurso">
        <div className="flex flex-row justify-between items-start w-full">
          <div className="flex flex-col items-start">
            <h1 className="text-xl font-poppins font-semibold text-left">Disciplina</h1>
            {curso ? (
              <p style={{ color: '#374DAA' }} className="text-left text-xl font-semibold">
                {curso.nome}
              </p>
            ) : (
              <p className="text-left">Nenhuma disciplina foi selecionada ainda.</p>
            )}
          </div>
          <div className="flex flex-col items-end">
            {curso ? (
              <>
                <p className="text-sm text-right">{curso.data}</p>
                <p className="text-xl text-right font-poppins font-semibold">{curso.shortname}</p>
              </>
            ) : (
              <p></p>
            )}
          </div>
        </div>
        <div>
          {curso ? (
            <div className="center-wrapper flex flex-col justify-between">
              <DadosGerais cursoSelecionado={cursoSelecionado} />
              <Indicators cursoSelecionado={cursoSelecionado} />
              <div className="flex flex-row space-x-5">
                <Grafico cursoSelecionado={cursoSelecionado} />
                <NumAbso cursoSelecionado={cursoSelecionado} />
              </div>
              <div className="flex flex-row space-x-5">
                <Ranking_Melhor_Desempenho cursoSelecionado={cursoSelecionado} />
                <Ranking_Mais_Dificuldade cursoSelecionado={cursoSelecionado} />
              </div>
            </div>
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </div>
  );
}