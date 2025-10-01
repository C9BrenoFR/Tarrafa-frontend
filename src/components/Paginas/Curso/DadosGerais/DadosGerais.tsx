
  interface DadosGeraisProps {
    cursoSelecionado: string | null;
  }
  
  export default function DadosGerais({ cursoSelecionado } : DadosGeraisProps) {
    return (
      <div className="Box2 mt-5">
        <div className="mb-14">
          <div className="maincurso">
            <div className="mt-10 ml-10 mb-5">
              <h1 className="text-xl font-poppins font-semibold text-left">
                Dados Gerais
              </h1>
              <p style={{ color: "#9291A5" }}>da disciplina</p>
            </div>
          </div>
          <div className="relative after:absolute after:bottom-0 after:left-1/2 after:translate-x-[-50%] after:w-[90%] after:h-[1px] after:bg-gray-200 bg-white" />
        </div>
  
        <div className="flex items-center justify-center">
          <div className="flex flex-row justify-between items-center space-x-45">
            <div className="flex flex-row items-center">
              <p className="text-base text-gray-600 mb-2 text-left mr-6">
                Total de<br />estudantes <br /> matriculados
              </p>
              <div className="w-20 h-12 bg-gray-100 flex items-center justify-center rounded text-base ">
                100
              </div>
            </div>
  
            <div className="flex flex-row items-center">
              <p className="text-base text-gray-600 mb-2 text-left mr-6">
                Média das<br />notas finais <br />da disciplina
              </p>
              <div className="w-20 h-12 bg-gray-100 flex items-center justify-center rounded text-base ">
                81
              </div>
            </div>
  
            <div className="flex flex-row items-center">
              <p className="text-base text-gray-600 mb-2 text-left mr-6">
                Taxa de <br />aprovação <br />da disciplina
              </p>
              <div className="w-20 h-12 bg-gray-100 flex items-center justify-center rounded text-base">
                75%
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  