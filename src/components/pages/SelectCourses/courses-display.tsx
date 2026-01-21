import { Curso } from "@/types/curso";
import CourseCard from "./course-card";
import SearchInput from "@/components/template/searchInput";
import Pagination from "@/components/template/pagination";
import { useState } from "react";

interface CoursesDisplayProps {
    path: string
    courses: Curso[]
    searchTerm: string
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
    currentPage: number
    totalPages: number
    onPageChange: (page: number) => void
    totalItems: number
}

export default function CoursesDisplay({
    path,
    courses,
    searchTerm,
    setSearchTerm,
    currentPage,
    totalPages,
    onPageChange,
    totalItems
}: CoursesDisplayProps) {
    const pageName = path.split('/').filter(segment => segment !== '')[0] || 'Disciplina';
    const itemsPerPage = 6;

    return (
        <div className="flex-1 flex justify-center items-center pl-[240px]">
            <div className="BoxCurso">
                <div className="flex flex-row justify-between items-start w-full">
                    <div className="flex flex-col items-start">
                        <h1 className="text-xl font-poppins font-semibold text-left">{pageName}</h1>
                        <p style={{ color: '#374DAA' }} className="text-left text-xl font-semibold">
                            Escolha um curso
                        </p>
                    </div>
                    <div className="flex flex-col items-end">
                        <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} placeholder="Buscar disciplina" />
                    </div>
                </div>
                <div>
                    {courses.length > 0 ? (
                        <>
                            <div className="grid grid-cols-2 gap-4 justify-items-center">
                                {courses.map(course => (
                                    <CourseCard key={course.id} path={path} course={course} />
                                ))}
                            </div>

                            <Pagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={onPageChange}
                                totalItems={totalItems}
                                itemsPerPage={itemsPerPage}
                            />
                        </>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-12">
                            <div className="text-gray-400 text-4xl mb-4">📚</div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">
                                Nenhum curso encontrado
                            </h3>
                            <p className="text-gray-500 text-center">
                                {searchTerm ?
                                    `Não foram encontrados cursos que correspondam à busca "${searchTerm}".` :
                                    'Nenhum curso disponível no momento.'
                                }
                            </p>
                            {searchTerm && (
                                <button
                                    onClick={() => setSearchTerm('')}
                                    className="mt-4 px-4 py-2 text-sm font-medium text-white bg-[#374DAA] rounded-lg hover:bg-[#2a3a85] transition-colors"
                                >
                                    Limpar busca
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
