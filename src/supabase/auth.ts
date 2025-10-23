import { createClient as browserClient } from "./browers-client"
import { createClient as serverClient } from "./server-client"


export async function login(email: string, password: string) {
    const supabase = browserClient()

    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    })

    if (error) {
        return { error: error.message }
    }

    return { result: data, error: null }
}

export async function signOut() {
    const supabase = browserClient()
    await supabase.auth.signOut()
}

export async function getUser() {
    const supabase = await serverClient()

    const { data: { user }, error } = await supabase.auth.getUser()

    if (error) {
        return { error: error.message, user: null }
    }

    return { user, error: null }
}