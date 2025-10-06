export interface DisciplinaType {
    id: number;
    shortname: string;
    nome: string;
    data: string;
    value: number;
    // flags
    flagEngajamento?: number;
    flagMotivacao?: number;
    flagDesempenho?: number;
    flagProfCog?: number;
    flagRelAlunoProf?: number;
    flagDesistencia?: boolean;
}