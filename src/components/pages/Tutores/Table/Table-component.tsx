"use client";

import { api } from "@/utils/api";
import { error } from "console";
import { useEffect, useState } from "react";
import Table from "./table";
import { useError } from "@/hooks/useError";
import type { BaseEntity } from "@/components/template/table-types";

interface Props {
  id: number;
}

interface DataTable {
  channels: Record<string, string>[];
  id: number;
  message: string;
}

export default function TableComponent({ id }: Props) {
  const [data, setData] = useState<DataTable | null>(null);
  const error = useError();

  useEffect(() => {
    async function fetch() {
      try {
        error.clear();
        const response = await api.get(
          `analysis/tutors/subject/${id}/interaction_channels`,
        );
        setData(response.data.data.subject);
      } catch (err) {
        error.setError("Erro ao buscar indicadores");
        console.error("Erro ao buscar indicadores: ", err);
      }
    }
    fetch();
  }, [id, error.clear, error.setError]);

  const new_data_base_entity = (data: Record<string, string>[]) => {
    let new_data: BaseEntity[] = [];
    data.forEach((value) => {
      const new_value: BaseEntity = {
        id: Number(value.forum_id), 
        forum_name: value.forum_name,
        mensagens_alunos: value.mensagens_alunos,
        mensagens_total: value.mensagens_total,
        mensagens_tutores: value.mensagens_tutores,
      };
      new_data.push(new_value);
    });
    return new_data;
  };

  const new_data = new_data_base_entity(data?.channels ?? []);

  return (
    <div className="Box2 mt-5">
      <div className="mb-5">
        <div className="maincurso">
          <div className="mt-5 ml-5">
            <h1 className="text-xl font-poppins font-semibold text-left">
              Canais de Interação
            </h1>
            <p style={{ color: "#9291A5" }}>da disciplina</p>
          </div>
        </div>
      </div>
      <Table
      title={""}
      data={new_data}
      data_keys={{
        keys: ['forum_name', 'mensagens_alunos', 'mensagens_tutores', 'mensagens_total'],
        headers: ['Canal de Interação', 'Mensagens de alunos', 'Mensagens de tutores', 'mensagens totais'],
      }}
      actions={[]}
    />
    </div>
  );
}


