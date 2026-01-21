import Link from "next/link";
import { DisciplinaType } from "../types/disciplina";
import { FaPlus } from "react-icons/fa";
import { Tooltip } from "@/components/template/tooltip";
import { getIndicatorsInfo } from "./indicatorsInfo";
import { get } from "http";
import { Aluno as AlunoType } from "@/types/aluno";

export const getNivel = (flag: string) => {
	switch (flag) {
		case "muito_baixo": return "Muito Baixo";
		case "baixo": return "Baixo";
		case "medio": return "Médio";
		case "alto": return "Alto";
		case "muito_alto": return "Muito Alto";
		default: return "Não definido";
	}
};

export const getFlagCor = (flag: string) => {
	switch (flag) {
		case "muito_baixo": return "bg-red-100 text-red-700";
		case "baixo": return "bg-orange-100 text-orange-700";
		case "medio": return "bg-yellow-100 text-yellow-700";
		case "alto": return "bg-indigo-100 text-indigo-700";
		case "muito_alto": return "bg-emerald-100 text-emerald-700";
		default: return "bg-gray-100 text-gray-600";
	}
};

// export const getProfCogCor = (nivel: number) => {
// 	switch (nivel) {
// 		case 0: return "bg-red-100 text-red-700";
// 		case 1: return "bg-orange-100 text-orange-700";
// 		case 2: return "bg-indigo-100 text-indigo-700";
// 		case 3: return "bg-emerald-100 text-emerald-700";
// 		default: return "bg-gray-100 text-gray-600";
// 	}
// };

export const getDesistencia = (flag: boolean) => flag ? "Positiva" : "Negativa";

export const getFlagDesistenciaCor = (flag: boolean) =>
	flag ? "bg-red-100 text-red-700" : "bg-emerald-100 text-emerald-700";

export const getColumns = (activeTab: string | null, cursoSelecionado: number | null) => {
	const detalhesColumn = {
		label: "Detalhes",
		name: "detalhes",
		cell: (row: AlunoType) => (
			<Link
				href={`/cursos/${cursoSelecionado}/alunos/${row.user_id}`}
				className="cursor-pointer flex items-center justify-center w-full"
			>
				<FaPlus className='text-2xl text-gray-700' />
			</Link>
		)
	};

	const engajamentoColumns = [
		{
			label: "Aluno",
			name: "full_name",
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
			name: "posts_required_label",
			cell: (row: AlunoType) => (
				<div className={`max-w-27 py-1 rounded-md text-xs font-medium border text-center mx-auto ${getFlagCor(row.posts_required_label ?? "Não definido")}`}>
					{getNivel(row.posts_required_label ?? "Não definido")}
				</div>
			)
		},
		{
			label: "Nº de Posts em Fóruns Avaliativos",
			name: "num_posts_required"
		},
		detalhesColumn
	];

	const desempenhoColumns = [
		{
			label: "Aluno",
			name: "full_name",
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
			name: "performance_label",
			cell: (row: AlunoType) => (
				<div className={`max-w-27 py-1 rounded-md text-xs font-medium border text-center mx-auto ${getFlagCor(row.performance_label ?? "Não definido")}`}>
					{getNivel(row.performance_label ?? "Não definido")}
				</div>
			)
		},
		{
			label: "Nota",
			name: "media_percentual"
		},
		{
			label: "Comparação com a Média da Turma",
			name: "comparative"
		},
		detalhesColumn
	];

	const motivacaoColumns = [
		{
			label: "Aluno",
			name: "full_name",
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
			name: "posts_unrequired_label",
			cell: (row: AlunoType) => (
				<div className={`max-w-27 py-1 rounded-md text-xs font-medium border text-center mx-auto ${getFlagCor(row.posts_unrequired_label ?? "Não definido")}`}>
					{getNivel(row.posts_unrequired_label ?? "Não definido")}
				</div>
			)
		},
		{
			label: "Nº de Participações em Fóruns Não Obrigatórios",
			name: "num_posts_unrequired"
		},
		detalhesColumn
	];

	const profCognitivaColumns = [
		{
			label: "Aluno",
			name: "full_name",
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
			name: "label",
			cell: (row: AlunoType) => (
				<div className={`max-w-27 py-1 rounded-md text-xs font-medium border text-center mx-auto ${getFlagCor(row.label ?? "Não definido")}`}>
					{getNivel(row.label ?? "Não definido")}
				</div>
			)
		},
		{
			label: "Nível Médio de Profundidade Cognitiva em Fóruns",
			name: "forum_mean_level"
		},
		{
			label: "Nível Médio de Profundidade Cognitiva em Quizzes",
			name: "quiz_mean_level"
		},
		{
			label: "Nível Médio de Profundidade Cognitiva em Tarefas",
			name: "assign_mean_level"
		},
		detalhesColumn
	];

	// const relacaoAlunoProfColumns = [
	// 	{
	// 		label: "Aluno",
	// 		name: "full_name",
	// 		options: {
	// 			sticky: true,
	// 			headerClassName: "min-w-96",
	// 			cellClassName: "truncate overflow-hidden whitespace-nowrap font-medium text-left max-w-xs"
	// 		}
	// 	},
	// 	{
	// 		label: "Relação Aluno-Professor",
	// 		name: "full_name",
	// 	},
	// 	{
	// 		label: "Nº de Mensagens Trocadas com o Professor",
	// 		name: "full_name"
	// 	},
	// 	{
	// 		label: "Percentual de Participação em Fóruns Mediados pelo Docente",
	// 		name: "full_name"
	// 	},
	// 	{
	// 		label: "Frequência de Contato Aluno-Professor",
	// 		name: "full_name"
	// 	},
	// 	detalhesColumn
	// ];

	const desistenciaColumns = [
		{
			label: "Aluno",
			name: "full_name",
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
			name: "give_up",
			cell: (row: AlunoType) => (
				<div className={`max-w-27 py-1 rounded-md text-xs font-medium border text-center mx-auto ${getFlagDesistenciaCor(row.give_up ?? false)}`}>
					{getDesistencia(row.give_up ?? false)}
				</div>
			)
		},
		{
			label: "Índice de Interação Avaliativa",
			name: "engagement_label",
			cell: (row: AlunoType) => (
				<div className={`max-w-27 py-1 rounded-md text-xs font-medium text-center mx-auto`}>
					{getNivel(row.engagement_label ?? "Não definido")}
				</div>
			)
		},
		{
			label: "Índice de Interação Não Avaliativa",
			name: "motivation_label",
			cell: (row: AlunoType) => (
				<div className={`max-w-27 py-1 rounded-md text-xs font-medium text-center mx-auto`}>
					{getNivel(row.motivation_label ?? "Não definido")}
				</div>
			)
		},
		{
			label: "Índice de Desempenho",
			name: "performance_label",
			cell: (row: AlunoType) => (
				<div className={`max-w-27 py-1 rounded-md text-xs font-medium text-center mx-auto`}>
					{getNivel(row.performance_label ?? "Não definido")}
				</div>
			)
		},
		{
			label: "Nível de Profundidade Cognitiva",
			name: "cognitive_label",
			cell: (row: AlunoType) => (
				<div className={`max-w-27 py-1 rounded-md text-xs font-medium text-center mx-auto`}>
					{getNivel(row.cognitive_label ?? "Não definido")}
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
			name: "full_name",
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
			name: "full_name",
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
				<div className={`py-1 rounded-md text-xs font-medium border-[1.5px] ${getFlagCor(row.flagMotivacao ?? "Não definido")}`}>
					{getNivel(row.flagMotivacao ?? "Não definido")}
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
				<div className={`py-1 rounded-md text-xs font-medium border-[1.5px] ${getFlagCor(row.flagDesempenho ?? "Não definido")}`}>
					{getNivel(row.flagDesempenho ?? "Não definido")}
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
				<div className={`py-1 rounded-md text-xs font-medium border-[1.5px] ${getFlagCor(row.flagProfCog ?? "Não definido")}`}>
					{getNivel(row.flagProfCog ?? "Não definido")}
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
				<div className={`py-1 rounded-md text-xs font-medium border-[1.5px] ${getFlagCor(row.flagRelAlunoProf ?? "Não definido")}`}>
					{getNivel(row.flagRelAlunoProf ?? "Não definido")}
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
						pathname: '/cursos',
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