import { Curso } from "@/types/curso";
import axios from "axios";

const base_url = process.env.NEXT_PUBLIC_API_BASE_URL || ''
const username = process.env.NEXT_PUBLIC_API_USERNAME || ''
const password = process.env.NEXT_PUBLIC_API_PASSWORD || ''

export const api = axios.create({
    baseURL: base_url,
    auth: {
        username: username,
        password: password
    },
    headers: {
        "Accept": "application/json"
    }
})

export async function getCourses(): Promise<Curso[]> {
    const response = await api.get('/subjects')
    if (response.status != 200)
        return []
    return response.data.data.subjects
}