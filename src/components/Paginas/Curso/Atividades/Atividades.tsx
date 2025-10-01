import GraficoComp from './GraficoComp';

interface GraficoProps {
    cursoSelecionado: string | null;
}
const legenda = [
    { id: 'Página', label: 'Página', value: 27, color: '#DA77C4' },
    { id: 'Fórum', label: 'Fórum', value: 25, color: '#4C6CA8' },
    { id: 'Quiz', label: 'Quiz', value: 18, color: '#7F62A3' },
    { id: 'Tarefa', label: 'Tarefa', value: 15, color: '#91B0D0' },
    { id: 'Outros', label: 'Outros', value: 10, color: '#E3D9EB' },
];

export default function Grafico({ cursoSelecionado }: GraficoProps) {
    return (
        <div className="Box my-10">
            <div className="Boxcursopequeno">
                <div className="mt-10 ml-10 mb-5">
                    <h1 className="text-xl font-poppins font-semibold text-left">Atividades</h1>
                    <p style={{ color: "#9291A5" }}>da Disciplina</p>
                </div>
            </div>
            <div className="relative after:absolute after:bottom-0 after:left-1/2 after:translate-x-[-50%] after:w-[90%] after:h-[1px] after:bg-gray-200 bg-white" />
            
            <GraficoComp legenda={legenda} />

            <div className="flex justify-center flex-wrap gap-4 mb-8">
            <p
                style={{
                    display: 'flex',
                    gap: '1rem',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    marginTop: '1rem',
                }}
            >
                {legenda.map((item) => (
                    <span
                        key={item.label}
                        style={{ display: 'flex', alignItems: 'center', gap: 6 }}
                    >
                        <span
                            style={{
                                width: 18,
                                height: 18,
                                borderRadius: '50%',
                                backgroundColor: item.color,
                                display: 'inline-block',
                            }}
                        />
                        <span style={{ color: '#4a4a4a' }}>{item.label}</span>
                    </span>
                ))}
            </p>
            </div>
        </div>
    );
}
