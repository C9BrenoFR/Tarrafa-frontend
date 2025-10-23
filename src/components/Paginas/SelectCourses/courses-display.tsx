import { Curso } from "@/types/curso";
import CourseCard from "./course-card";
import SearchInput from "@/components/template/searchInput";
import { useState } from "react";

interface CoursesDisplayProps {
    path: string
    courses: Curso[]
    searchTerm: string
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

export default function CoursesDisplay({ path, courses, searchTerm, setSearchTerm }: CoursesDisplayProps) {
    const pageName = path.split('/').filter(segment => segment !== '')[0] || 'Disciplina';

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
                    <div className="grid grid-cols-2 gap-4 justify-items-center">
                        {courses.map(course => (
                            <CourseCard key={course.id} path={path} course={course} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
