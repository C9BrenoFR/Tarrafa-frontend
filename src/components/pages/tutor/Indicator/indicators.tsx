'use client';

import styles from './Indicators.module.css';
import responseIcon from './response.png'
import clickIcon from './click.png'
import chatIcon from './chat.png'
import Image from 'next/image';
import { Tooltip } from "@/components/template/tooltip";
import { getIndicatorsInfo } from "@/utils/indicatorsInfo";
import { useEffect, useState } from "react";
import { useError } from "@/hooks/useError";
import { api } from "@/utils/api";
import Loading from "@/components/ui/loading";
import Button from "@/components/ui/button";

type IndicatorsInfo = {
  indicators: {
    access: string,
    feedback: string,
    response_foruns: string
  },
  student_id: number,
  subject_id: number
}


interface IndicatorsProps {
  id_course: number
  id_tutor: number
}

export default function Indicators({ id_course, id_tutor }: IndicatorsProps) {
  const [indicatorsData, setIndicatorsData] = useState<IndicatorsInfo | null>(null)
  const error = useError()

  useEffect(() => {
    async function fetch() {
      try {
        error.clear()
        const response = await api.get(`analysis/tutors/subject/${id_course}/tutor/${id_tutor}/indicators`)
        setIndicatorsData(response.data.data)
      } catch (err) {
        error.setError("Erro ao buscar indicadores")
        console.error("Erro ao buscar indicadores: ", err)
      }
    };
    fetch();
  }, [error.clear, error.setError]);

  return (
    <div className="Box pb-5">
      <div className="maincurso">
        <div className="mt-10 ml-10 mb-5">
          <h1 className="text-xl font-poppins font-semibold text-left">Indicadores Pedagócigos</h1>
          <p style={{ color: "#9291A5" }}>calculados</p>
        </div>
        <div className="m-10 flex gap-2">
          <Button href='/#' >Detalhes</Button>
          <Button href='/tutores/curso'>Ver mais</Button>
        </div>
      </div>

      <div className="relative after:absolute after:bottom-0 after:left-1/2 after:translate-x-[-50%] after:w-[90%] after:h-[1px] after:bg-gray-200 after:shadow-[0_2px_4px_rgba(0,0,0,0.05)] bg-white" />

      {indicatorsData ? (
        <div className="flex flex-row gap-6 justify-center px-10 py-8">
          <div className="relative quadrado bg-[#DCFCE7]">
            <div className="flex flex-col w-full justify-between">
              <div className="ml-5 flex justify-start space-x-3">
                <div className="bg-[#3CD856] rounded-full flex items-center justify-center w-8 h-8">
                  <Image
                    src={responseIcon}
                    alt="Ícone aluno-professor"
                    width={15}
                    height={20}
                    className="object-cover"
                  />
                </div>
                <p className="text-2xl font-bold text-gray-900">{indicatorsData.indicators.response_foruns}</p>
              </div>
              <div className="ml-17 flex text-left">
                <div className="flex flex-col leading-snug">
                  <p className={styles.textoPersonalizado2}>de disciplinas</p>
                  <p className={styles.textoPersonalizado}>com ótimo índice de<br /> resposta em fóruns</p>
                </div>
              </div>
            </div>
            <div className="absolute h-full top-0 right-0 pt-3 pr-3 text-md">
              <Tooltip message={getIndicatorsInfo.interacaoAvaliativaInfo} />
            </div>
          </div>

          <div className="relative quadrado bg-[#D0C3FF]">
            <div className="flex flex-col w-full justify-between ">
              <div className="ml-5 flex justify-start space-x-3">
                <div className="bg-[#5C3CD8] rounded-full flex items-center justify-center w-8 h-8">
                  <Image
                    src={clickIcon}
                    alt="Ícone aluno-professor"
                    width={21}
                    height={28}
                    className="mr-0.5 object-cover"
                  />
                </div>
                <p className="text-2xl font-bold text-gray-900">{indicatorsData.indicators.access}</p>
              </div>
              <div className="ml-17 flex text-left">
                <div className="flex flex-col leading-snug">
                  <p className={styles.textoPersonalizado2}>de disciplinas</p>
                  <p className={styles.textoPersonalizado}>com bom índice de<br />acesso a plataforma</p>
                </div>
              </div>
            </div>
            <div className="absolute h-full top-0 right-0 pt-3 pr-3 text-md">
              <Tooltip message={getIndicatorsInfo.relacaoAlunoProfInfo} />
            </div>
          </div>

          <div className="relative quadrado bg-[#FFD8E2]">
            <div className="flex flex-col w-full justify-between">
              <div className="ml-5 flex justify-start space-x-3">
                <div className="bg-[#D83C8C] rounded-full flex items-center justify-center w-8 h-8">
                  <Image
                    src={chatIcon}
                    alt="Ícone aluno-professor"
                    width={21}
                    height={28}
                    className="object-cover"
                  />
                </div>
                <p className="text-2xl font-bold text-gray-900">{indicatorsData.indicators.feedback}</p>
              </div>
              <div className="ml-17 flex text-left">
                <div className="flex flex-col leading-snug">
                  <p className={styles.textoPersonalizado2}>de tutores</p>
                  <p className={styles.textoPersonalizado}>com bom índice de<br />feedback</p>
                </div>
              </div>
            </div>
            <div className="absolute h-full top-0 right-0 pt-3 pr-3 text-md">
              <Tooltip message={getIndicatorsInfo.desistenciaInfo} />
            </div>
          </div>
        </div>
      ) : (
        <Loading>Carregando Dados</Loading>
      )}
    </div>
  );
}
