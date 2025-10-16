import { Curso } from "@/types/curso";
import Link from "next/link";

interface CourseCardProps {
    course: Curso
    path: string
}

export default function CourseCard({ course, path }: CourseCardProps) {
    return (
        <Link href={`${path}${course.id}`} className="w-full bg-[#5a6acf] text-white hover:bg-[#374DAA] hover:scale-105 transition-all flex flex-col rounded-xl border border-gray-400 p-2">
            <h1>{course.fullname}</h1>
            <p>{course.shortname}-{course.period}</p>
        </Link>
    );
};
