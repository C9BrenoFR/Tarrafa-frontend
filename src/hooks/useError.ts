'use client';

import ErrorMessage from "@/components/ui/error-message";
import { useState, useCallback } from "react";
import type { ReactElement } from "react";

type ErrorHook = {
    message: string | null;
    clear: () => void;
    setError: (new_value: string) => void;
    renderError: () => ReactElement;
    hasError: boolean;
}

export function useError(): ErrorHook {
    const [error, setErrorState] = useState<string | null>(null)

    const setError = useCallback((new_value: string) => {
        setErrorState(new_value)
    }, [])

    const clear = useCallback(() => {
        setErrorState(null)
    }, [])

    const renderError = useCallback(() => {
        if (!error) return ErrorMessage({ children: null });
        return ErrorMessage({ children: error })
    }, [error])

    return {
        message: error,
        clear,
        setError,
        renderError,
        hasError: error !== null
    }
}
