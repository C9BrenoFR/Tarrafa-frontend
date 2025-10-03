import Link from "next/link";
import { AlunoType } from "../types/aluno";
import { DisciplinaType } from "../types/disciplina";

export const getNivel = (nivel: number) => {
	switch (nivel) {
		case 1: return "Muito Baixo";
		case 2: return "Baixo";
		case 3: return "Médio";
		case 4: return "Alto";
		case 5: return "Muito Alto";
		default: return "Não definido";
	}
};

export const getFlagCor = (nivel: number) => {
	switch (nivel) {
		case 1: return "bg-red-100 text-red-700";
		case 2: return "bg-orange-100 text-orange-700";
		case 3: return "bg-yellow-100 text-yellow-700";
		case 4: return "bg-indigo-100 text-indigo-700";
		case 5: return "bg-emerald-100 text-emerald-700";
		default: return "bg-gray-100 text-gray-600";
	}
};

export const getProfCogCor = (nivel: number) => {
	switch (nivel) {
		case 0: return "bg-red-100 text-red-700";
		case 1: return "bg-orange-100 text-orange-700";
		case 2: return "bg-indigo-100 text-indigo-700";
		case 3: return "bg-emerald-100 text-emerald-700";
		default: return "bg-gray-100 text-gray-600";
	}
};

export const getDesistencia = (flag: boolean) => flag ? "Sim" : "Não";

export const getFlagDesistenciaCor = (flag: boolean) =>
	flag ? "bg-red-100 text-red-700" : "bg-emerald-100 text-emerald-700";

export const getColumns = (activeTab: string | null, cursoSelecionado: number | null) => {
	const detalhesColumn = {
		label: "Detalhes",
		name: "detalhes",
		cell: (row: AlunoType) => (
			<Link
				href={{
					pathname: '/Aluno',
					query: {
						cursoId: cursoSelecionado,
						alunoId: row.id
					}
				}}
				className="cursor-pointer flex items-center justify-center w-full"
			>
				{row.detalhes}
			</Link>
		)
	};

	const engajamentoColumns = [
		{
			label: "Aluno",
			name: "nome",
			options: {
				sticky: true,
				headerClassName: "min-w-96",
				cellClassName: "truncate overflow-hidden whitespace-nowrap font-medium text-left max-w-xs"
			}
		},
		{
			label: "Índice de Interação Avaliativa",
			name: "flagEngajamento",
			cell: (row: AlunoType) => (
				<div className={`py-1 rounded-md text-xs font-medium border-[1.5px] ${getFlagCor(row.flagEngajamento)}`}>
					{getNivel(row.flagEngajamento)}
				</div>
			)
		},
		{
			label: "Nº de Posts em Fóruns Avaliativos",
			name: "nPostsForunsAv"
		},
		{
			label: "Percentual de Quizzes Realizados",
			name: "quizzesRealiz"
		},
		{
			label: "Percentual de Tarefas Enviadas",
			name: "tarefasEnv"
		},
		detalhesColumn
	];

	const desempenhoColumns = [
		{
			label: "Aluno",
			name: "nome",
			options: {
				sticky: true,
				headerClassName: "min-w-96",
				cellClassName: "truncate overflow-hidden whitespace-nowrap font-medium text-left max-w-xs"
			}
		},
		{
			label: "Desempenho",
			name: "flagDesempenho",
			cell: (row: AlunoType) => (
				<div className={`py-1 rounded-md text-xs font-medium border-[1.5px] ${getFlagCor(row.flagDesempenho)}`}>
					{getNivel(row.flagDesempenho)}
				</div>
			)
		},
		{
			label: "Média Geral das Notas Avaliativas",
			name: "mediaNotas"
		},
		{
			label: "Comparação com a Média da Turma",
			name: "compMedia"
		},
		{
			label: "Nº de Atividades Abaixo da Média",
			name: "ativAbaixoMedia"
		},
		detalhesColumn
	];

	const motivacaoColumns = [
		{
			label: "Aluno",
			name: "nome",
			options: {
				sticky: true,
				headerClassName: "min-w-96",
				cellClassName: "truncate overflow-hidden whitespace-nowrap font-medium text-left max-w-xs"
			}
		},
		{
			label: "Índice de Interação Não Avaliativa",
			name: "flagMotivacao",
			cell: (row: AlunoType) => (
				<div className={`py-1 rounded-md text-xs font-medium border-[1.5px] ${getFlagCor(row.flagMotivacao)}`}>
					{getNivel(row.flagMotivacao)}
				</div>
			)
		},
		{
			label: "Percentual de Participação em Fóruns Não Obrigatórios",
			name: "partForunsNaoObrig"
		},
		{
			label: "Nº de Visualizações em Materiais Complementares",
			name: "nVisuCompl"
		},
		{
			label: "Nº de Interações na Última Semana",
			name: "nInter"
		},
		detalhesColumn
	];

	const profCognitivaColumns = [
		{
			label: "Aluno",
			name: "nome",
			options: {
				sticky: true,
				headerClassName: "min-w-96",
				cellClassName: "truncate overflow-hidden whitespace-nowrap font-medium text-left max-w-xs"
			}
		},
		{
			label: "Nível Médio de Profundidade Cognitiva",
			name: "flagProfCog",
			cell: (row: AlunoType) => (
				<div className={`py-1 rounded-md text-xs font-medium border-[1.5px] ${getProfCogCor(row.flagProfCog)}`}>
					{row.flagProfCog}
				</div>
			)
		},
		{
			label: "Nível Médio de Profundidade Cognitiva em Fóruns",
			name: "profCogForuns"
		},
		{
			label: "Nível Médio de Profundidade Cognitiva em Quizzes",
			name: "profCogQuizzes"
		},
		{
			label: "Nível Médio de Profundidade Cognitiva em Tarefas",
			name: "profCogTarefas"
		},
		detalhesColumn
	];

	const relacaoAlunoProfColumns = [
		{
			label: "Aluno",
			name: "nome",
			options: {
				sticky: true,
				headerClassName: "min-w-96",
				cellClassName: "truncate overflow-hidden whitespace-nowrap font-medium text-left max-w-xs"
			}
		},
		{
			label: "Relação Aluno-Professor",
			name: "flagRelAlunoProf",
			cell: (row: AlunoType) => (
				<div className={`py-1 rounded-md text-xs font-medium border-[1.5px] ${getFlagCor(row.flagRelAlunoProf)}`}>
					{getNivel(row.flagRelAlunoProf)}
				</div>
			)
		},
		{
			label: "Nº de Mensagens Trocadas com o Professor",
			name: "nMsgsAlunoProf"
		},
		{
			label: "Percentual de Participação em Fóruns Mediados pelo Docente",
			name: "partForunsDocente"
		},
		{
			label: "Frequência de Contato Aluno-Professor",
			name: "freqContAlunoProf"
		},
		detalhesColumn
	];

	const desistenciaColumns = [
		{
			label: "Aluno",
			name: "nome",
			options: {
				sticky: true,
				headerClassName: "min-w-96",
				cellClassName: "truncate overflow-hidden whitespace-nowrap font-medium text-left max-w-xs"
			}
		},
		{
			label: "Índice de Desistência",
			name: "flagDesistencia",
			cell: (row: AlunoType) => (
				<div className={`py-1 rounded-md text-xs font-medium border-[1.5px] ${getFlagDesistenciaCor(row.flagDesistencia)}`}>
					{getDesistencia(row.flagDesistencia)}
				</div>
			)
		},
		{
			label: "Índice de Interação Avaliativa",
			name: "flagEngajamento"
		},
		{
			label: "Índice de Interação Não Avaliativa",
			name: "flagMotivacao"
		},
		{
			label: "Índice de Desempenho",
			name: "flagDesempenho"
		},
		{
			label: "Índice de Relação Aluno-Professor",
			name: "flagRelAlunoProf"
		},
		detalhesColumn
	];

	const allSubjectsColumns = [
		{
			label: "Disciplina",
			name: "nome",
			options: {
				sticky: true,
				headerClassName: "min-w-96",
				cellClassName: "truncate overflow-hidden whitespace-nowrap font-medium text-left max-w-xs"
			}
		},
		{
			label: "Índice de Interação Avaliativa",
			name: "flagEngajamento",
			cell: (row: DisciplinaType) => (
				<div className={`py-1 rounded-md text-xs font-medium border-[1.5px] ${getFlagCor(row.flagEngajamento)}`}>
					{getNivel(row.flagEngajamento)}
				</div>
			)
		},
		{
			label: "Índice de Interação Não Avaliativa",
			name: "flagMotivacao",
			cell: (row: DisciplinaType) => (
				<div className={`py-1 rounded-md text-xs font-medium border-[1.5px] ${getFlagCor(row.flagMotivacao)}`}>
					{getNivel(row.flagMotivacao)}
				</div>
			)
		},
		{
			label: "Desempenho",
			name: "flagDesempenho",
			cell: (row: DisciplinaType) => (
				<div className={`py-1 rounded-md text-xs font-medium border-[1.5px] ${getFlagCor(row.flagDesempenho)}`}>
					{getNivel(row.flagDesempenho)}
				</div>
			)
		},
		{
			label: "Profundidade Cognitiva",
			name: "flagProfCog",
			cell: (row: DisciplinaType) => (
				<div className={`py-1 rounded-md text-xs font-medium border-[1.5px] ${getFlagCor(row.flagProfCog)}`}>
					{getNivel(row.flagProfCog)}
				</div>
			)
		},
		{
			label: "Relação Aluno-Professor",
			name: "flagRelAlunoProf",
			cell: (row: DisciplinaType) => (
				<div className={`py-1 rounded-md text-xs font-medium border-[1.5px] ${getFlagCor(row.flagRelAlunoProf)}`}>
					{getNivel(row.flagRelAlunoProf)}
				</div>
			)
		},
		{
			label: "Índice de Desistência",
			name: "flagDesistencia",
			cell: (row: DisciplinaType) => (
				<div className={`py-1 rounded-md text-xs font-medium border-[1.5px] ${getFlagDesistenciaCor(row.flagDesistencia)}`}>
					{getDesistencia(row.flagDesistencia)}
				</div>
			)
		},
	];

	switch (activeTab) {
		case "Interação Avaliativa":
			return engajamentoColumns;
		case "Desempenho":
			return desempenhoColumns;
		case "Interação Não Avaliativa":
			return motivacaoColumns;
		case "Profundidade Cognitiva":
			return profCognitivaColumns;
		case "Relação Aluno-Professor":
			return relacaoAlunoProfColumns;
		case "Desistência":
			return desistenciaColumns;
		case "allSubjects":
			return allSubjectsColumns;
		default:
			return engajamentoColumns;
	}
};
