import { Curso } from "@/types/curso";
import axios from "axios";

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    }
})


export async function getCourses(): Promise<Curso[]> {
    const response = await api.get('/subjects')
    if (response.status != 200)
        return []
    return response.data.data.subjects
}