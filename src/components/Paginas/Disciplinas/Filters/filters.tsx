export default function Filters() {
    return (
        <div className="flex flex-row min-w-0 gp-2">
            <div className="flex flex-row max-w-fit">
                <div></div>
                <div className="flex-1 text-center items-center border-2 border-gray-300 p-2 bg-gray-100 text-gray-600">Curso</div>
                <div>
                    <select className="flex-1 select-filter">
                        <option value="" disabled hidden>
                            Filtrar por Curso
                        </option>
                        <option>Licenciatura em Educação Física</option>
                        <option>Licenciatura em Geografia</option>
                    </select>
                </div>
                <div />
                <div className="flex flex-row gap-1 max-w-fit">
                    <div className="flex-1 text-center border-2 border-gray-300 p-2">Indicador</div>
                    <select className="flex-1 select-filter">
                        <option value="" disabled hidden>
                            Filtrar por Indicador
                        </option>
                        <option>Licenciatura em Educação Física</option>
                        <option>Licenciatura em Geografia</option>
                    </select>
                </div>
                <div className="flex flex-row gap-1 max-w-fit">
                    <div className="flex-1 text-center border-2 border-gray-300 pb-1">Magnitude</div>
                    <select className="flex-1 select-filter">
                        <option value="" disabled hidden>
                            Filtrar por Magnitude
                        </option>
                        <option>Licenciatura em Educação Física</option>
                        <option>Licenciatura em Geografia</option>
                    </select>
                </div>
            </div>
        </div>
    );
}