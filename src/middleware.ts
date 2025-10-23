import { NextRequest, NextResponse } from "next/server";
import { getUser } from "./supabase/auth";

export const config = {
    matcher: ["/((?!_next|api|.*\\..*).*)"],
};

export async function middleware(request: NextRequest) {
    const user = await getUser()

    //Tratamento do usuário deslogado
    if (!user) {
        if (request.nextUrl.pathname != "/login") {
            return NextResponse.redirect(new URL('/login', request.url))
        }
    } else {
        if (request.nextUrl.pathname == "/login") {
            return NextResponse.redirect(new URL('/', request.url))
        }
    }

    return NextResponse.next();
}