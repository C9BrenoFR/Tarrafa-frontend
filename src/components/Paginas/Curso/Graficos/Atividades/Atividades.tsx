import GraficoComp from './GraficoComp'
interface GraficoProps {
    graph_data: UsageByModule[]
}

type ItemLegenda = {
    id: string
    label: string
    color: string
    value: number
}

function generateColor(index: number, total: number) {
    const baseHue = 212;
    const saturation = 45;
    const lightnessStart = 30;
    const lightnessEnd = 70;
    const lightness = lightnessStart + ((lightnessEnd - lightnessStart) * index) / (total - 1);
    return `hsl(${baseHue}, ${saturation}%, ${lightness}%)`;
}

export default function Grafico({ graph_data }: GraficoProps) {
    const legenda: ItemLegenda[] = []
    graph_data.forEach((data, index) => {
        legenda.push({
            id: data.modulo,
            label: data.modulo,
            color: generateColor(index, graph_data.length),
            value: Number(data.pct_modulo_no_curso)
        })
    });
    return (
        <div className="Box my-10 p-1.5">
            <div className="Boxcursopequeno">
                <div className="mt-10 ml-10 mb-5">
                    <h1 className="text-xl font-poppins font-semibold text-left">Atividades</h1>
                    <p style={{ color: "#9291A5" }}>da Disciplina</p>
                </div>
            </div>
            <div className="relative after:absolute after:bottom-0 after:left-1/2 after:translate-x-[-50%] after:w-[90%] after:h-[1px] after:bg-gray-200 bg-white" />

            <GraficoComp legenda={legenda} />

            <div className="flex justify-center flex-wrap gap-4 mb-4 px-10">
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
