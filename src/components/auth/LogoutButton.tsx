'use client';

import { useRouter } from 'next/navigation';
import { signOut } from '@/supabase/auth';

interface LogoutButtonProps {
    className?: string;
    children?: React.ReactNode;
}

export default function LogoutButton({ className = "", children = "Sair" }: LogoutButtonProps) {
    const router = useRouter();

    const handleLogout = async () => {
        try {
            await signOut();
            router.push('/login');
        } catch (error) {
            console.error('Erro ao fazer logout:', error);
        }
    };

    return (
        <button
            onClick={handleLogout}
            className={`border border-red-600 rounded p-1 text-red-600 hover:bg-red-600 hover:text-white hover:scale-105 transition-all ${className}`}
        >
            {children}
        </button>
    );
}
