interface GeneralDataProps {
  tutor: any;
}

export default function GeneralData({ tutor }: GeneralDataProps) {
  return (
    <div className="Box3 p-6 rounded-lg border border-gray-200 shadow-sm">
      <h1 className="text-2xl font-semibold text-left mb-6 pb-4 border-b border-gray-200">
        Dados Pessoais
      </h1>
      <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col ml-4 mr-4">
          <div className="flex items-center mb-4">
            <p className="text-sm font-medium w-24">E-mail</p>
            <p className="text-sm bg-gray-100 rounded-md py-2 px-4 flex-1">
              {tutor.email ? tutor.email : "Não Informado"}
            </p>
          </div>
          <div className="flex items-center mb-4">
            <p className="text-sm font-medium w-24">Curso</p>
            <p className="text-sm bg-gray-100 rounded-md py-2 px-4 flex-1">
              {tutor.degree_program ? tutor.degree_program : "Não Informado"}
            </p>
          </div>
          <div className="flex items-center">
            <p className="text-sm font-medium w-24">Cidade</p>
            <p className="text-sm bg-gray-100 rounded-md py-2 px-4 flex-1">
              {tutor.city ? tutor.city : "Não Informado"}
            </p>
          </div>
        </div>
        <div className="flex flex-col mr-4">
          <div className="flex items-center mb-4">
            <p className="text-sm font-medium w-32">Grupo</p>
            <p className="text-sm bg-gray-100 rounded-md py-2 px-4 flex-1">
              {tutor.tutor_groups ? tutor.tutor_groups : "Não Informado"}
            </p>
          </div>
          <div className="flex items-center mb-4">
            <p className="text-sm font-medium w-32">Primeiro Acesso</p>
            <p className="text-sm bg-gray-100 rounded-md py-2 px-4 flex-1">
              {tutor.first_access_moodle ? tutor.first_access_moodle : "Não Informado"}
            </p>
          </div>
          <div className="flex items-center">
            <p className="text-sm font-medium w-32">Último Acesso</p>
            <p className="text-sm bg-gray-100 rounded-md py-2 px-4 flex-1">
              {tutor.last_access_subject ? tutor.last_access_subject : "Não Informado"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

