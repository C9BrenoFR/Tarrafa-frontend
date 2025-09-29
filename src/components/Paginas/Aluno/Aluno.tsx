import * as React from "react";
import { AlunoType } from "@/types/aluno";
import Indicators from "./Indicator/Indicators";
import { GaugeChart } from "./GaugeChart/GaugeChart";
import AtividadesChart from "./AtividadesChart/AtividadesChart";


interface CursoType {
  id: string;
  nome: string;
  data: string;
}

interface AlunoProps {
  cursos: CursoType[];
  cursoSelecionado: string | null;
  alunos: AlunoType[];
  alunoSelecionado: number | null;
}

export default function Aluno({ cursos, cursoSelecionado, alunos, alunoSelecionado }: AlunoProps) {
  const curso = cursos.find(c => c.id === cursoSelecionado);
  const aluno = alunos.find(a => a.id === alunoSelecionado);

  return (
    <div className="flex-1 flex justify-center items-center pl-[240px]">
      <div className="BoxCurso">
        <div className="flex flex-row justify-between items-start w-full mb-4">
          <div className="flex flex-col items-start">
            {aluno ? (
              <h1 className="text-xl font-semibold text-left">
                {aluno.nome}
              </h1>
            ) : (
              <p className="text-left">Nenhum aluno foi selecionado ainda.</p>
            )}
            {curso ? (
              <p style={{ color: '#374DAA' }} className="text-left text-xl font-semibold">
                {curso.nome}
              </p>
            ) : (
              <p className="text-left">Nenhum curso válido foi selecionado ainda.</p>
            )}
          </div>
          <div className="flex flex-col items-end">
            {curso ? (
              <>
                <p className="text-sm text-right">{curso.data}</p>
                <p className="text-xl text-right font-semibold">{curso.id}</p>
              </>
            ) : (
              <p></p>
            )}
          </div>
        </div>
        {curso && aluno && (
          <div className="flex flex-col justify-between">
            <div className="Box3 p-6 rounded-lg border border-gray-200 shadow-sm">
              <h1 className="text-2xl font-semibold text-left mb-6 pb-4 border-b border-gray-200">
                Dados Pessoais
              </h1>
              <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col ml-4 mr-4">
                  <div className="flex items-center mb-4">
                    <p className="text-sm font-medium w-24">E-mail</p>
                    <p className="text-sm bg-gray-100 rounded-md py-2 px-4 flex-1">
                      {aluno.email}
                    </p>
                  </div>
                  <div className="flex items-center mb-4">
                    <p className="text-sm font-medium w-24">Curso</p>
                    <p className="text-sm bg-gray-100 rounded-md py-2 px-4 flex-1">
                      {aluno.graduacao}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <p className="text-sm font-medium w-24">Cidade</p>
                    <p className="text-sm bg-gray-100 rounded-md py-2 px-4 flex-1">
                      {aluno.cidade}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col mr-4">
                  <div className="flex items-center mb-4">
                    <p className="text-sm font-medium w-32">Polo</p>
                    <p className="text-sm bg-gray-100 rounded-md py-2 px-4 flex-1">
                      {aluno.polo}
                    </p>
                  </div>
                  <div className="flex items-center mb-4">
                    <p className="text-sm font-medium w-32">Primeiro Acesso</p>
                    <p className="text-sm bg-gray-100 rounded-md py-2 px-4 flex-1">
                      {aluno.primeiroAcesso}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <p className="text-sm font-medium w-32">Último Acesso</p>
                    <p className="text-sm bg-gray-100 rounded-md py-2 px-4 flex-1">
                      {aluno.ultimoAcesso}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Indicators aluno={aluno} cursoSelecionado={cursoSelecionado} />

            <div className="flex gap-4 mb-8 justify-between">
              <div className="Box4 flex-1 p-6">
                <h1 className="text-xl font-poppins font-semibold text-left">
                  Nota final
                </h1>
                <p className="text-[#9291A5] mb-6 pb-4 border-b border-gray-200">da disciplina</p>
                <div className="p-2"><GaugeChart /></div>
              </div>

              <div className="Box4 flex-1 p-6">
                <h1 className="text-xl font-poppins font-semibold text-left">
                  Notas
                </h1>
                <p className="text-[#9291A5] mb-6 pb-4 border-b border-gray-200">da disciplina</p>
                <div className="p-5">
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}