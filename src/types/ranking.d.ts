export type RankingInfo = {
    id: number
    ranking_best: RankingContent[]
    ranking_difficulties: RankingContent[]
}

export type RankingContent = {
    name: string
    final_grade: number
    percentual: number
    pos: number
    user_id: number
}