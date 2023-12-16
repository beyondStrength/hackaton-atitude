interface Student {
    id: number;
    name: string;
    institutions: institution[];
}

export interface institution {
    name: string;
    Series: Array<serie>;
  }
  
  export interface serie {
    title: string;
    status: string;
  }
  

const students: Student[] = [
    {
        id: 1,
        name: 'Enzo Turano',
        institutions: [
            {
                name: "Afonso Pena",
                Series: [
                    {
                        title: "Sexto",
                        status: "Aprovado",
                    },
                    {
                        title: "Sétimo",
                        status: "Aprovado",
                    },
                    {
                        title: "Oitavo",
                        status: "Aprovado",
                    },
                    {
                        title: "Nono",
                        status: "Aprovado",
                    },
                ],
            },
            {
                name: "Nave Rio",
                Series: [
                    {
                        title: "Primeiro",
                        status: "Aprovado",
                    },
                    {
                        title: "Segundo",
                        status: "Cursando",
                    },
                    {
                        title: "Terceiro",
                        status: "A seguir",
                    },
                ],
            },
        ]
    },
    {
        id: 2,
        name: 'Richard Wallier',
        institutions: [
            {
                name: "Prioridade Hum",
                Series: [
                    {
                        title: "Sexto",
                        status: "Aprovado",
                    },
                    {
                        title: "Sétimo",
                        status: "Aprovado",
                    },
                    {
                        title: "Oitavo",
                        status: "Aprovado",
                    },
                    {
                        title: "Nono",
                        status: "Aprovado",
                    },
                    {
                        title: "Primeiro",
                        status: "Aprovado",
                    },
                ],
            },
            {
                name: "Nave Rio",
                Series: [
                    {
                        title: "Primeiro",
                        status: "Aprovado",
                    },
                    {
                        title: "Segundo",
                        status: "Aprovado",
                    },
                    {
                        title: "Terceiro",
                        status: "Cursando",
                    },
                ],
            },
        ]
    }
]

export function getAllStudents() {
    return (students);
}

export function getStudentById(id: number): Student {
    const student = students.find(x => x.id == id);
    if (!student?.id) {
        return ({id: 0, name: '', institutions: []});
    }
    return (student);
}


