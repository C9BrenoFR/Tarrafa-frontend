import { useError } from '@/hooks/useError';
import { useEffect, useMemo } from 'react';
import Grafico, { ItemLegenda } from './Grafico';

interface NumAbsoProps {
    situations: Situation[]
}

export default function NumAbso({ situations }: NumAbsoProps) {
    const error = useError()

    const legenda: ItemLegenda[] = useMemo(() => {
        return situations.map(data => ({
            categoria: data.situacao,
            valor: data.qtd
        }))
    }, [situations])

    const is_valid = useMemo(() => {
        return situations.some(data => data.qtd > 0) && situations.length > 0
    }, [situations])

    useEffect(() => {
        if (!is_valid) {
            error.setError("Sem valores encontrados")
        } else {
            error.clear()
        }
    }, [is_valid, error.setError, error.clear])

    return (
        <div className="Box my-10">
            <div className="Boxcursopequeno">
                <div className="mt-10 ml-10 mb-5">
                    <h1 className="text-xl font-poppins font-semibold text-left">Status de Aprovação</h1>
                    <p style={{ color: "#9291A5" }}>dos Alunos da Disciplina</p>
                </div>
            </div>

            <div className="relative after:absolute after:bottom-0 after:left-1/2 after:translate-x-[-50%] after:w-[90%] after:h-[1px] after:bg-gray-200 bg-white" />
            {error.hasError ? (
                <div className="flex w-full h-full items-center justify-center">
                    {error.renderError()}
                </div>
            ) : (
                <Grafico data={legenda} />
            )}
        </div>
    );
}
