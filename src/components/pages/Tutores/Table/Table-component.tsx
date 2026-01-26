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
  channels: [string];
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

  const new_data = (data: string[]) => {
    let new_data: BaseEntity[] = [];
    data.forEach((value, index) => {
      new_data.push({} as BaseEntity);
    });
    return new_data;
  };

  return (
    <Table
      title={"Canais de Interação"}
      data={new_data(data?.channels ?? [])}
      data_keys={{
        keys: [],
        headers: [],
      }}
      actions={[]}
    />
  );
}
