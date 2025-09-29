'use client';

import Indicators from './Indicator/Indicators';
import Grafico from './Atividades/Atividades';
import NumAbso from './NumAbso/NumAbso';
import Ranking_Melhor_Desempenho from './Ranking_Melhor_Desempenho/Ranking_Melhor_Desempenho';
import Ranking_Mais_Dificuldade from './Ranking_Mais_Dificuldade/Ranking_Mais_Dificuldade';
import DadosGerais from './DadosGerais/DadosGerais';
type CursoType = {
  id: string;
  nome: string;
  data: string;
};

type CursoProps = {
  cursos: CursoType[];
  cursoSelecionado: string | null;
};

export default function Curso({ cursos, cursoSelecionado }: CursoProps) {
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
              <p className="text-left">Nenhum curso foi selecionado ainda.</p>
            )}
          </div>
          <div className="flex flex-col items-end">
            {curso ? (
              <>
                <p className="text-sm text-right">{curso.data}</p>
                <p className="text-xl text-right font-poppins font-semibold">{curso.id}</p>
              </>
            ) : (
              <p></p>
            )}
          </div>
        </div>
        <div>
          {curso ? (
            <div className="center-wrapper flex flex-col justify-between">
              <DadosGerais />
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
