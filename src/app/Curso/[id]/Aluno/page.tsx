import { getCourses } from '@/utils/api';
import NotFound from '@/components/Paginas/global/not-found';
import Alunos from '@/components/Paginas/Alunos/Alunos';

interface PageProps {
  params: Promise<{
    id: string
  }>
}

export default async function Page({ params }: PageProps) {
  const page_param = await params
  const cursos = await getCourses()
  const curso = cursos.filter(curso => curso.id == Number(page_param.id))[0]

  if (!curso) {
    return (
      <NotFound cursos={cursos}>
        <div className="flex-1 flex justify-center items-center pt-4 pl-[240px]">
          <p>Curso {page_param.id} não encontrado! Por favor, use o menu no canto superior esquerdo, ou tente novamente mais tarde!</p>
        </div>
      </NotFound>
    )
  }

  return <Alunos curso={curso} />;
}