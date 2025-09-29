import RenderizaAlunos from './RenderizaAlunos';

const Curso = [
    { id: '1', label: 'Cálculo III', value: 27 },
    { id: '2', label: 'Equações Diferenciais I', value: 25 },
    { id: '3', label: 'Teoria dos Compiladores', value: 18 },
    { id: '4', label: 'Física III', value: 15 },
    { id: '5', label: 'Física I', value: 10 },
    { id: '6', label: 'Anatomia I', value: 50 },
    { id: '7', label: 'Pegagogia II', value: 48 },
    { id: '8', label: 'Empreendedorismo', value: 42 },
    { id: '9', label: 'Introdução à Extensão', value: 40 },
    { id: '10', label: 'Teoria da Computação', value: 38 },
];

export default function Ranking_Melhor_Desempenho() {
    return (
        <div className="Box my-10">
            <div className="Boxcursopequeno">
                <div className="mt-10 ml-10 mb-5">
                    <h1 className="text-xl font-poppins font-semibold text-left">Ranking</h1>
                    <p style={{ color: "#9291A5" }}>Disciplinas com Melhores Desempenhos</p>
                </div>
            </div>
            <div className="relative after:absolute after:bottom-0 after:left-1/2 after:translate-x-[-50%] after:w-[90%] after:h-[1px] after:bg-gray-200 after:shadow-[0_2px_4px_rgba(0,0,0,0.05)] bg-white" />
            <div className='m-10'>
                <RenderizaAlunos curso={Curso} />
            </div>
        </div>
    );
}
