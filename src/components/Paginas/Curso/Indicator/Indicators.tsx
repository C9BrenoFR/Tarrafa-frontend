import Link from "next/link";
import styles from './Indicators.module.css';
import alunoIcon from './aluno.png';
import alunoIcon2 from './baixados2.png';
import alunoIcon3 from './baixados.png';
import alunoIcon1 from './baixados1.png';
import alunoIcon5 from './evasion.png';
import cognitive_depth from './cognitive_depth.png';
import Image from 'next/image';
import { useEffect, useState } from "react";
import { api } from "@/utils/api";
import Loading from "@/components/ui/loading";

interface IndicatorsProps {
  id: number | null;
}

type PercentualInfo = {
  id: number
  boa_interacao_avaliativa: number
  boa_interacao_nao_avalativa: number
  bom_desempenho: number
  relacao_aluno_professor: number
  profundidade_cognitiva: number
  indice_desistencia: number
}

export default function Indicators({ id }: IndicatorsProps) {
  const [data, setData] = useState<PercentualInfo | null>(null)

  useEffect(() => {
    async function fetch() {
      try {
        const response = await api.get(`analysis/percentual/${id}`)
        setData(response.data.data)
      } catch (error) {
        console.error(error)
      }
    };
    fetch();
  }, [id]);
  return (
    <div className="Box mt-10 pb-5">
      <div className="maincurso">
        <div className="mt-10 ml-10 mb-5">
          <h1 className="text-xl font-poppins font-semibold text-left">Indicadores</h1>
          <p style={{ color: "#9291A5" }}>calculados</p>
        </div>
        <div className="m-10">
          <Link
            href={{
              pathname: '/Alunos',
              query: {
                id: id
              }
            }}
            className="px-4 py-2 rounded bg-[#5a6acf] text-white hover:bg-[#374DAA] transition"
          >
            Saiba mais
          </Link>
        </div>
      </div>

      <div className="relative after:absolute after:bottom-0 after:left-1/2 after:translate-x-[-50%] after:w-[90%] after:h-[1px] after:bg-gray-200 after:shadow-[0_2px_4px_rgba(0,0,0,0.05)] bg-white" />

      {data ? (
        <>
          <div className={styles.BoxCentralizarIndicadores}>
            <div className={styles.EspacarIndicadores}>
              <div className="quadrado bg-[#DCFCE7]">
                <div className="flex flex-col w-full justify-between">
                  <div className="ml-5 flex justify-start space-x-3">
                    <div className="bg-[#3CD856] rounded-full flex items-center justify-center w-8 h-8">
                      <Image
                        src={alunoIcon1}
                        alt="Ícone aluno-professor"
                        width={15}
                        height={20}
                        className="object-cover"
                      />
                    </div>
                    <p className="text-2xl font-bold text-gray-900">{data.boa_interacao_avaliativa.toFixed(2)}%</p>
                  </div>
                  <div className="ml-17 flex text-left">
                    <div className="flex flex-col leading-snug">
                      <p className={styles.textoPersonalizado2}>de alunos</p>
                      <p className={styles.textoPersonalizado}>com ótimo índice<br />de interação avaliativa</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="quadrado bg-[#C3D8FF]">
                <div className="flex flex-col w-full justify-between ">
                  <div className="ml-8 flex justify-start space-x-3">
                    <div className="bg-[#3C56D8] rounded-full flex items-center justify-center w-8 h-8">
                      <Image
                        src={alunoIcon3}
                        alt="Ícone aluno-professor"
                        width={21}
                        height={28}
                        className="ml-2.5 object-cover"
                      />
                    </div>
                    <p className="text-2xl font-bold text-gray-900">{data.boa_interacao_nao_avalativa.toFixed(2)}%</p>
                  </div>

                  <div className="ml-19 flex text-left">
                    <div className="flex flex-col leading-snug">
                      <p className={styles.textoPersonalizado2}>de alunos</p>
                      <p className={styles.textoPersonalizado}>com bom índice<br />de interação não avaliativa</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="quadrado bg-[#FFF5A6]">
                <div className="flex flex-col w-full justify-between ">
                  <div className="ml-5 flex justify-start space-x-3">
                    <div className="bg-[#D8D03C] rounded-full flex items-center justify-center w-8 h-8">
                      <Image
                        src={alunoIcon2}
                        alt="Ícone aluno-professor"
                        width={21}
                        height={28}
                        className="object-cover"
                      />
                    </div>
                    <p className="text-2xl font-bold text-gray-900">{data.bom_desempenho.toFixed(2)}%</p>
                  </div>

                  <div className="ml-17 flex text-left">
                    <div className="flex flex-col leading-snug">
                      <p className={styles.textoPersonalizado2}>de alunos</p>
                      <p className={styles.textoPersonalizado}>com bom desempenho</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="quadrado bg-[#FFD3A6]">
                <div className="flex flex-col w-full justify-between ">
                  <div className="ml-5 flex justify-start space-x-3">
                    <div className="bg-[#D86D3C] rounded-full flex items-center justify-center w-8 h-8">
                      <Image
                        src={cognitive_depth}
                        alt="Ícone aluno-professor"
                        width={18}
                        height={28}
                        className="object-cover text-white"
                      />
                    </div>
                    <p className="text-2xl font-bold text-gray-900">{data.profundidade_cognitiva.toFixed(2)}%</p>
                  </div>

                  <div className="ml-17 flex text-left">
                    <div className="flex flex-col leading-snug">
                      <p className={styles.textoPersonalizado2}>de alunos</p>
                      <p className={styles.textoPersonalizado}>com nível 3<br />de profundidade cognitiva</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.BoxCentralizarIndicadores}>
            <div className="quadrado bg-[#D0C3FF]">
              <div className="flex flex-col w-full justify-between ">
                <div className="ml-5 flex justify-start space-x-3">
                  <div className="bg-[#5C3CD8] rounded-full flex items-center justify-center w-8 h-8">
                    <Image
                      src={alunoIcon}
                      alt="Ícone aluno-professor"
                      width={21}
                      height={28}
                      className="mr-0.5 object-cover"
                    />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{data.relacao_aluno_professor.toFixed(2)}%</p>
                </div>

                <div className="ml-17 flex text-left">
                  <div className="flex flex-col leading-snug">
                    <p className={styles.textoPersonalizado2}>de alunos</p>
                    <p className={styles.textoPersonalizado}>com boa relação<br />aluno-professor</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="quadrado bg-[#FFD8E2]">
              <div className="flex flex-col w-full justify-between">
                <div className="ml-5 flex justify-start space-x-3">
                  <div className="bg-[#D83C8C] rounded-full flex items-center justify-center w-8 h-8">
                    <Image
                      src={alunoIcon5}
                      alt="Ícone aluno-professor"
                      width={21}
                      height={28}
                      className="object-cover"
                    />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{data.indice_desistencia.toFixed(2)}%</p>
                </div>

                <div className="ml-17 flex text-left">
                  <div className="flex flex-col leading-snug">
                    <p className={styles.textoPersonalizado2}>de alunos</p>
                    <p className={styles.textoPersonalizado}>com baixo<br />
                      índice de desistência</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Loading>Buscando Dados</Loading>
      )}
    </div>
  );
}
