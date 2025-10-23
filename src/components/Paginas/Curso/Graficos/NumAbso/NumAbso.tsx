import Grafico, { ItemLegenda } from './Grafico';

interface NumAbsoProps {
    situations: Situation[]
}

export default function NumAbso({ situations }: NumAbsoProps) {
    let legenda: ItemLegenda[] = []
    situations.forEach(data => {
        legenda.push({
            categoria: data.situacao,
            valor: data.qtd
        })
    })
    return (
        <div className="Box my-10">
            <div className="Boxcursopequeno">
                <div className="mt-10 ml-10 mb-5">
                    <h1 className="text-xl font-poppins font-semibold text-left">Status de Aprovação</h1>
                    <p style={{ color: "#9291A5" }}>dos Alunos da Disciplina</p>
                </div>
            </div>

            <div className="relative after:absolute after:bottom-0 after:left-1/2 after:translate-x-[-50%] after:w-[90%] after:h-[1px] after:bg-gray-200 bg-white" />
            <Grafico data={legenda} />
        </div>
    );
}
