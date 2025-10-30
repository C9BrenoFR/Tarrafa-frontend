export interface DisciplinaType {
    id: number;
    shortname: string;
    nome: string;
    data: string;
    value: number;
    // flags
    flagEngajamento?: string;
    flagMotivacao?: string;
    flagDesempenho?: string;
    flagProfCog?: string;
    flagRelAlunoProf?: string;
    flagDesistencia?: boolean;
}