import * as React from "react";
import DataTable from "@/components/template/dataTable";
import SearchInput from "@/components/template/searchInput";
import { AlunoType } from "@/types/aluno";
import { getColumns } from "@/utils/columns";
import ScrollableTabs from "@/components/template/indicadoresTabs";

interface CursoType {
  id: string;
  nome: string;
  data: string;
}

interface AlunosProps {
  cursos: CursoType[];
  alunos: AlunoType[];
  cursoSelecionado: string | null;
}

const tabs = ['Índice de Interação Avaliativa',
  'Índice de Interação Não Avaliativa',
  'Desempenho',
  'Profundidade Cognitiva',
  'Relação Aluno-Professor',
  'Índice de Desistência'];

export default function Alunos({ cursos, alunos, cursoSelecionado }: AlunosProps) {
  const curso = cursos.find(c => c.id === cursoSelecionado);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [activeTab, setActiveTab] = React.useState("Engajamento");

  const columns = getColumns(activeTab, cursoSelecionado);

  return (
    <div className="flex-1 flex justify-center items-center pl-[240px]">
      <div className="BoxCurso">
        {/* Header */}
        <div className="flex flex-row justify-between items-start w-full mb-4">
          <div className="flex flex-col items-start">
            <h1 className="text-xl font-poppins font-semibold text-left">Alunos</h1>
            {curso ? (
              <p style={{ color: '#374DAA' }} className="text-left text-xl font-semibold">
                {curso.nome}
              </p>
            ) : (
              <p className="text-left">Nenhuma disciplina foi selecionado ainda.</p>
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
        {curso && (
          <div className="flex flex-col gap-4">
            {/* Indicadores */}
            <div className="flex flex-col gap-4">
              <div className="flex-1 gap-2 justify-between">
                <ScrollableTabs
                  tabs={tabs}
                  activeTab={activeTab}
                  onTabClick={setActiveTab}
                />
              </div>

            </div>

            {/* Tabela */}
            <DataTable
              rowsPerPage={10}
              data={alunos}
              columns={columns}
              searchTerm={searchTerm}
            />
          </div>
        )}
      </div>
    </div>
  );
}