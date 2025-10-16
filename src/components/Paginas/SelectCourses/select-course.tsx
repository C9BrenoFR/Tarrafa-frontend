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

    const filteredCourses = courses.filter(course =>
        course.shortname.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.period.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <Header id={0} cursos={courses} />
                <main>
                    <CoursesDisplay path={path} courses={filteredCourses} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                </main>
            </div>
        </div>
    );
};
