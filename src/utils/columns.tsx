import Link from "next/link";
import { AlunoType } from "../types/aluno";
import { DisciplinaType } from "../types/disciplina";
import { FaPlus } from "react-icons/fa";
import { Tooltip } from "@/components/template/tooltip";
import { getIndicatorsInfo } from "./indicatorsInfo";
import { get } from "http";

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
			label: (<div className="flex flex-row relative">
						<div className="w-[90%]">
							<p>Índice de Interação Avaliativa</p>
						</div>
						<div className="absolute inset-y-0 right-4 flex items-center w-[10%] pt-1 pr-1">
							<Tooltip message={getIndicatorsInfo.interacaoAvaliativaInfo} />
						</div>
					</div>),
			name: "flagEngajamento",
			cell: (row: AlunoType) => (
				<div className={`py-1 rounded-md text-xs font-medium border-[1.5px] ${getFlagCor(row.flagEngajamento ?? 0)}`}>
					{getNivel(row.flagEngajamento ?? 0)}
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
			label: (<div className="flex flex-row relative">
						<div className="w-[90%]">
							<p>Desempenho</p>
						</div>
						<div className="absolute inset-y-0 right-2 flex items-center w-[10%] pr-1">
							<Tooltip message={getIndicatorsInfo.desempenhoInfo} />
						</div>
					</div>),
			name: "flagDesempenho",
			cell: (row: AlunoType) => (
				<div className={`py-1 rounded-md text-xs font-medium border-[1.5px] ${getFlagCor(row.flagDesempenho ?? 0)}`}>
					{getNivel(row.flagDesempenho ?? 0)}
				</div>
			)
		},
		{
			label: "Nota (%)",
			name: "mediaNotas"
		},
		{
			label: "Comparação com a Média da Turma",
			name: "compMedia"
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
			label: (<div className="flex flex-row relative">
						<div className="w-[90%]">
							<p>Índice de Interação <br /> Não Avaliativa</p>
						</div>
						<div className="absolute inset-y-0 right-4 flex items-center w-[10%] pt-1 pr-1">
							<Tooltip message={getIndicatorsInfo.interacaoNaoAvaliativaInfo} />
						</div>
					</div>),
			name: "flagMotivacao",
			cell: (row: AlunoType) => (
				<div className={`py-1 rounded-md text-xs font-medium border-[1.5px] ${getFlagCor(row.flagMotivacao ?? 0)}`}>
					{getNivel(row.flagMotivacao ?? 0)}
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
			label: (<div className="flex flex-row relative">
						<div className="w-[90%]">
							<p>Nível Médio de Profundidade Cognitiva</p>
						</div>
						<div className="absolute inset-y-0 right-1 flex items-center w-[10%] pt-1 pr-1">
							<Link href="https://docs.moodle.org/501/en/Learning_analytics_indicators#Cognitive_depth">
								<Tooltip message={getIndicatorsInfo.profCogInfo} />
							</Link>
						</div>
					</div>),
			name: "flagProfCog",
			cell: (row: AlunoType) => (
				<div className={`py-1 rounded-md text-xs font-medium border-[1.5px] ${getProfCogCor(row.flagProfCog ?? 0)}`}>
					{row.flagProfCog ?? 0}
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
				<div className={`py-1 rounded-md text-xs font-medium border-[1.5px] ${getFlagCor(row.flagRelAlunoProf ?? 0)}`}>
					{getNivel(row.flagRelAlunoProf ?? 0)}
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
			label: (<div className="flex flex-row relative">
						<div className="w-[90%]">
							<p>Índice de Desistência</p>
						</div>
						<div className="absolute inset-y-0 right-3 flex items-center w-[10%] pt-1 pr-1">
							<Tooltip message={getIndicatorsInfo.desistenciaInfo} />
						</div>
					</div>),
			name: "flagDesistencia",
			cell: (row: AlunoType) => (
				<div className={`py-1 rounded-md text-xs font-medium border-[1.5px] ${getFlagDesistenciaCor(row.flagDesistencia ?? false)}`}>
					{getDesistencia(row.flagDesistencia ?? false)}
				</div>
			)
		},
		{
			label: "Índice de Interação Avaliativa",
			name: "flagEngajamento",
			cell: (row: AlunoType) => (
				<div className={`py-1 rounded-md text-xs font-medium border-[1.5px] ${getFlagCor(row.flagEngajamento ?? 0)}`}>
					{getNivel(row.flagEngajamento ?? 0)}
				</div>
			)
		},
		{
			label: "Índice de Interação Não Avaliativa",
			name: "flagMotivacao",
			cell: (row: AlunoType) => (
				<div className={`py-1 rounded-md text-xs font-medium border-[1.5px] ${getFlagCor(row.flagMotivacao ?? 0)}`}>
					{getNivel(row.flagMotivacao ?? 0)}
				</div>
			)
		},
		{
			label: "Índice de Desempenho",
			name: "flagDesempenho",
			cell: (row: AlunoType) => (
				<div className={`py-1 rounded-md text-xs font-medium border-[1.5px] ${getFlagCor(row.flagDesempenho ?? 0)}`}>
					{getNivel(row.flagDesempenho ?? 0)}
				</div>
			)
		},
		{
			label: "Nível de Profundidade Cognitiva",
			name: "flagProfCog",
			cell: (row: AlunoType) => (
				<div className={`py-1 rounded-md text-xs font-medium border-[1.5px] ${getProfCogCor(row.flagProfCog ?? 0)}`}>
					{row.flagProfCog ?? 0}
				</div>
			)
		},
		// {
		// 	label: "Índice de Relação Aluno-Professor",
		// 	name: "flagRelAlunoProf",
		// 	cell: (row: AlunoType) => (
		// 		<div className={`py-1 rounded-md text-xs font-medium border-[1.5px] ${getFlagCor(row.flagRelAlunoProf ?? 0)}`}>
		// 			{getNivel(row.flagRelAlunoProf ?? 0)}
		// 		</div>
		// 	)
		// },
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
			label: (<div className="flex flex-row relative">
						<div className="w-[90%]">
							<p>Índice de Interação Avaliativa</p>
						</div>
						<div className="absolute inset-y-0 right-4 flex items-center w-[10%] pt-1 pr-1">
							<Tooltip message={getIndicatorsInfo.interacaoAvaliativaInfo} />
						</div>
					</div>),
			name: "flagEngajamento",
			cell: (row: DisciplinaType) => (
				<div className={`py-1 rounded-md text-xs font-medium border-[1.5px] ${getFlagCor(row.flagEngajamento ?? 0)}`}>
					{getNivel(row.flagEngajamento ?? 0)}
				</div>
			)
		},
		{
			label: (<div className="flex flex-row relative">
						<div className="w-[90%]">
							<p>Índice de Interação <br /> Não Avaliativa</p>
						</div>
						<div className="absolute inset-y-0 right-4 flex items-center w-[10%] pt-1 pr-1">
							<Tooltip message={getIndicatorsInfo.interacaoNaoAvaliativaInfo} />
						</div>
					</div>),
			name: "flagMotivacao",
			cell: (row: DisciplinaType) => (
				<div className={`py-1 rounded-md text-xs font-medium border-[1.5px] ${getFlagCor(row.flagMotivacao ?? 0)}`}>
					{getNivel(row.flagMotivacao ?? 0)}
				</div>
			)
		},
		{
			label: (<div className="flex flex-row relative">
						<div className="w-[90%]">
							<p>Desempenho</p>
						</div>
						<div className="absolute inset-y-0 right-2 flex items-center w-[10%] pr-1">
							<Tooltip message={getIndicatorsInfo.desempenhoInfo} />
						</div>
					</div>),
			name: "flagDesempenho",
			cell: (row: DisciplinaType) => (
				<div className={`py-1 rounded-md text-xs font-medium border-[1.5px] ${getFlagCor(row.flagDesempenho ?? 0)}`}>
					{getNivel(row.flagDesempenho ?? 0)}
				</div>
			)
		},
		{
			label: (<div className="flex flex-row relative">
						<div className="w-[90%]">
							<p>Profundidade Cognitiva</p>
						</div>
						<div className="absolute inset-y-0 right-2 flex items-center w-[10%] pt-1 pr-1">
							<Link href="https://docs.moodle.org/501/en/Learning_analytics_indicators#Cognitive_depth">
								<Tooltip message={getIndicatorsInfo.profCogInfo} />
							</Link>
						</div>
					</div>),
			name: "flagProfCog",
			cell: (row: DisciplinaType) => (
				<div className={`py-1 rounded-md text-xs font-medium border-[1.5px] ${getProfCogCor(row.flagProfCog ?? 0)}`}>
					{row.flagProfCog ?? 0}
				</div>
			)
		},
		{
			label: (<div className="flex flex-row">
						<div className="w-[90%]">
							<p>Relação Aluno-Professor</p>
						</div>
						<div className="flex items-center w-[10%] pt-1 pr-1">
							<Tooltip message={getIndicatorsInfo.relacaoAlunoProfInfo} />
						</div>
					</div>),
			name: "flagRelAlunoProf",
			cell: (row: DisciplinaType) => (
				<div className={`py-1 rounded-md text-xs font-medium border-[1.5px] ${getFlagCor(row.flagRelAlunoProf ?? 0)}`}>
					{getNivel(row.flagRelAlunoProf ?? 0)}
				</div>
			)
		},
		{
			label: (<div className="flex flex-row relative">
						<div className="w-[90%]">
							<p>Índice de Desistência</p>
						</div>
						<div className="absolute inset-y-0 right-4 flex items-center w-[10%] pt-1 pr-1">
							<Tooltip message={getIndicatorsInfo.desistenciaInfo} />
						</div>
					</div>),
			name: "flagDesistencia",
			cell: (row: DisciplinaType) => (
				<div className={`py-1 rounded-md text-xs font-medium border-[1.5px] ${getFlagDesistenciaCor(row.flagDesistencia ?? false)}`}>
					{getDesistencia(row.flagDesistencia ?? false)}
				</div>
			)
		},
		{
			label: "Nº de Alunos Matriculados",
			name: "numAlunosMatriculados",
			cell: () => Math.floor(Math.random() * 100) + 30
		},
		{
			label: "Nº de Alunos Aprovados",
			name: "numAlunosAprovados",
			cell: () => Math.floor(Math.random() * 70) + 30
		},
		{
			label: "Nº de Alunos Reprovados",
			name: "numAlunosReprovados",
			cell: () => Math.floor(Math.random() * 20)
		},
		{
			label: "Média de Notas da Turma",
			name: "mediaNotasTurma",
			cell: () => Math.floor(Math.random() * 100)
		},
		{
			label: "Curso",
			name: "cursoGrad",
			cell: () => "Graduação"
		},
		{
			label: "Professor",
			name: "professor",
			cell: () => "Professor"
		},
		{
			label: "Semestre",
			name: "semestre",
			cell: (row: DisciplinaType) => (
				row.data
			)
		},
		{
			label: "Detalhes",
			name: "detalhes",
			cell: (row: DisciplinaType) => (
				<Link
					href={{
						pathname: '/Curso',
						query: {
							id: row.id,
						}
					}}
					className="cursor-pointer flex items-center justify-center w-full"
				>
					<FaPlus className='text-2xl text-gray-700' />
				</Link>
			)
		}
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
		// case "Relação Aluno-Professor":
		// 	return relacaoAlunoProfColumns;
		case "Desistência":
			return desistenciaColumns;
		case "allSubjects":
			return allSubjectsColumns;
		default:
			return engajamentoColumns;
	}
};