import DataTable from "@/components/template/dataTable";
import SearchInput from "@/components/template/searchInput";
import { getColumns } from "@/utils/columns";
import ScrollableTabs from "@/components/template/indicadoresTabs";
import { Aluno as AlunoType, Tab } from "@/types/aluno";
import { Curso as CursoType } from '@/types/curso';
import { useState } from "react";

interface AlunosProps {
  alunos: AlunoType[];
  curso: CursoType;
}

const tabs: Tab[] = ['Interação Avaliativa',
  'Interação Não Avaliativa',
  'Desempenho',
  'Profundidade Cognitiva',
  // 'Relação Aluno-Professor',
  'Desistência'];

export default function Alunos({ alunos, curso }: AlunosProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<Tab>("Interação Avaliativa");

  const columns = getColumns(activeTab, curso.id);

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
            <div className="flex flex-row items-center justify-between gap-1">
              <div className="flex-1 min-w-0 mt-2">
                <ScrollableTabs
                  tabs={tabs}
                  activeTab={activeTab}
                  onTabClick={setActiveTab}
                />
              </div>
              <div className="flex-shrink-0">
                <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} placeholder="Aluno" />
              </div>
            </div>

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