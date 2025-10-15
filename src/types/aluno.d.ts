export type Aluno = {
    id?: number;
    nome?: string;
    email?: string;
    graduacao?: string;
    cidade?: string;
    polo?: string;
    ultimoAcesso?: string;
    primeiroAcesso?: string;

    // reutilizaveis
    sentMsgs?: string;
    nAcessos?: number;
    frequenciaLogin?: string;
    detalhes?: React.ReactNode;
    full_name?: string

    // engajamento & desempenho
    num_posts_required?: number
    posts_required_label?: string

    // motivacao
    comparative?: number
    media_percentual?: number
    performance_label?: string
    subject_id?: number
    user_id?: number

    // profundidade cognitiva

    // relacao aluno-professor

    // desistencia


    // temporarios
    value?: number; // usado para os rankings de alunos 
}

export type Tab = 'Interação Avaliativa' | 'Interação Não Avaliativa' | 'Desempenho' | 'Profundidade Cognitiva' | 'Relação Aluno-Professor' | 'Desistência'