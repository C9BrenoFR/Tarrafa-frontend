'use client';

import DataTable from "@/components/template/dataTable";
import ScrollableTabs from "@/components/template/indicadoresTabs";
import SearchInput from "@/components/template/searchInput";
import { useError } from "@/hooks/useError";
import { Tutor as AlunoType } from "@/types/tutor";
import type { Tab } from "@/types/tutor";
import { api } from "@/utils/api";
import { getColumns } from "@/utils/columns";
import { Curso as CursoType } from '@/types/curso';
import { useState, useEffect } from "react";

interface TutoresProps {
  curso: CursoType;
}

const tabs: Tab[] = [
  'Respostas em Fóruns',
  'Acesso à Disciplina',
  'Feedback',
];

const tabMapping: Record<Tab, string> = {
  'Respostas em Fóruns': 'response_forums',
  'Acesso à Disciplina': 'access',
  'Feedback': 'Feedback',
};

export default function Tutores({ curso }: TutoresProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [alunos, setAlunos] = useState<AlunoType[]>([]);
  const [activeTab, setActiveTab] = useState<Tab>('Feedback');
  const error = useError()

  useEffect(() => {
    const fetch = async () => {
      try {
        error.clear()
        console.log("Iniciando fetch:")
        const response = await api.get(`analysis/tutors/subject/${curso.id}/${tabMapping[activeTab]}`)
        console.log(response.data.data)
        setAlunos(response.data.data)
      } catch (err) {
        error.setError("Erro ao buscar dados dos alunos")
        console.error("Erro ao buscar dados dos alunos: ", err)
      }
    }
    fetch()
  }, [curso, activeTab, error.clear, error.setError])

  const columns = getColumns(activeTab, curso.id);

  return (
    <div className="flex-1 flex justify-center items-center pl-[240px]">
      <div className="BoxCurso">
        {/* Header */}
        <div className="flex flex-row justify-between items-start w-full mb-4">
          <div className="flex flex-col items-start">
            <h1 className="text-xl font-poppins font-semibold text-left">Tutores</h1>
            {curso ? (
              <p style={{ color: '#374DAA' }} className="text-left text-xl font-semibold">
                {curso.fullname}
              </p>
            ) : (
              <p className="text-left">Nenhuma disciplina foi selecionada ainda.</p>
            )}
          </div>
          <div className="flex flex-col items-end">
            {curso ? (
              <>
                <p className="text-sm text-right">{curso.period}</p>
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
                {/* <ScrollableTabs
                  tabs={tabs}
                  activeTab={activeTab}
                  setTab={setActiveTab}
                  setAlunos={setAlunos}
                /> */}
              </div>
              <div className="flex-shrink-0">
                <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} placeholder="Tutor" />
              </div>
            </div>

            {error.hasError ? (
              <div className="flex justify-center items-center p-8">
                {error.renderError()}
              </div>
            ) : (
              <DataTable
                rowsPerPage={10}
                data={alunos}
                columns={columns}
                searchTerm={searchTerm}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}