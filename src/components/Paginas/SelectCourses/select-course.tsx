'use client';

import { Curso } from "@/types/curso";
import Sidebar from "../../Sidebar/Header/Sidebar";
import Header from "../../Sidebar/Header/Header";
import CoursesDisplay from "./courses-display";
import { useState } from "react";

interface SelectCourseProps {
    path: string
    courses: Curso[]
}

export default function SelectCourse({ path, courses }: SelectCourseProps) {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const filteredCourses = courses.filter(course =>
        course.fullname.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.shortname.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.period.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearchChange = (value: React.SetStateAction<string>) => {
        setSearchTerm(value);
        setCurrentPage(1);
    };

    const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedCourses = filteredCourses.slice(startIndex, endIndex);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <Header id={0} cursos={courses} />
                <main>
                    <CoursesDisplay
                        path={path}
                        courses={paginatedCourses}
                        searchTerm={searchTerm}
                        setSearchTerm={handleSearchChange}
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                        totalItems={filteredCourses.length}
                    />
                </main>
            </div>
        </div>
    );
};
