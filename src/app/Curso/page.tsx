import SelectCourse from '@/components/Paginas/SelectCourses/select-course';
import { getCourses } from '@/utils/api';

export default async function Page() {
  const cursos = await getCourses()

  return <SelectCourse path='/Curso/' courses={cursos} />;
}