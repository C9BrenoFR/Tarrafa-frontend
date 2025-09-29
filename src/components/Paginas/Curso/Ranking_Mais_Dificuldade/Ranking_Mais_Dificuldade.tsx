import RenderizaAlunos from '../RenderizaAlunos';

interface Ranking_Mais_DificuldadeProps {
  cursoSelecionado: string | null;
}

const alunos = [
  { id: '1', label: 'Laura Lima', value: 27 },
  { id: '2', label: 'Pietra Nunes', value: 25 },
  { id: '3', label: 'Caio Ricardo Justo', value: 18 },
  { id: '4', label: 'Bartolomeu Dantas', value: 15 },
  { id: '5', label: 'Vilma Sales Pereira', value: 10 },
  { id: '6', label: 'Maria das Rosas Flores', value: 50 },
  { id: '7', label: 'José Pedro Ribeiro', value: 48 },
  { id: '8', label: 'Márcio Dantas', value: 42 },
  { id: '9', label: 'Joaquina Paulina de Souza', value: 40 },
  { id: '10', label: 'Maria dos Cravos', value: 38 },
];

export default function Ranking_Mais_Dificuldade({ cursoSelecionado }: Ranking_Mais_DificuldadeProps) {
  return (
    <div className="Box mb-10">
      <div className="Boxcursopequeno">
        <div className="mt-10 ml-10 mb-5">
          <h1 className="text-xl font-poppins font-semibold text-left">Ranking</h1>
          <p style={{ color: "#9291A5" }}>Alunos com Mais Dificuldades</p>
        </div>
      </div>
      <div className="relative after:absolute after:bottom-0 after:left-1/2 after:translate-x-[-50%] after:w-[90%] after:h-[1px] after:bg-gray-200 after:shadow-[0_2px_4px_rgba(0,0,0,0.05)] bg-white" />
      <div className='m-10'>
        <RenderizaAlunos alunos={alunos} cursoSelecionado={cursoSelecionado} />
      </div>
    </div>
  );
}
