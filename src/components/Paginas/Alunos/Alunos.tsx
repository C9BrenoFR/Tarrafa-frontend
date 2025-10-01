import * as React from "react";
import DataTable from "@/components/template/dataTable";
import SearchInput from "@/components/template/searchInput";
import { AlunoType } from "@/types/aluno";
import { getColumns } from "@/utils/columns";
import ScrollableTabs from "@/components/template/indicadoresTabs";

type CursoType = {
  id: number;
  shortname: string;
  nome: string;
  data: string;
  value: number;
};

interface AlunosProps {
  cursos: CursoType[];
  alunos: AlunoType[];
  cursoSelecionado: number | null;
}

const tabs = ['Interação Avaliativa',
  'Interação Não Avaliativa',
  'Desempenho',
  'Profundidade Cognitiva',
  'Relação Aluno-Professor',
  'Desistência'];

export default function Alunos({ cursos, alunos, cursoSelecionado }: AlunosProps) {
  const curso = cursos.find(c => c.id === cursoSelecionado);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [activeTab, setActiveTab] = React.useState("Interação Avaliativa");

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
        {curso && (
          <div className="flex flex-col gap-4">
            {/* Indicadores */}
            <div className="flex flex-row items-center justify-between gap-1">
              <div className="flex-1 min-w-0 mt-2">
                <ScrollableTabs
                  tabs={tabs}
                  activeTab={activeTab}
                  onTabClick={setActiveTab}
                />
              </div>
              <div className="flex-shrink-0">
                <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
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