interface Student {
    id: number;
    name: string;
    institutions: institution[];
}

export interface institution {
    name: string;
    Certification: Array<serie>;
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
                Certification: [
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
                Certification: [
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
                Certification: [
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
                Certification: [
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
        return ({ id: 0, name: '', institutions: [] });
    }
    return (student);
}

export function addCertification(certification: { title: string, status: string }, id: number, institution: string) {
    const studentIndex = students.findIndex(x => x.id == id);
    const institutionIndex = students[studentIndex].institutions.findIndex(x => x.name == institution);
    const certificationNew = students[studentIndex].institutions[institutionIndex].Certification;
    certificationNew.push(certification);
    students[studentIndex].institutions[institutionIndex] = { ...students[studentIndex].institutions[institutionIndex], name: institution, Certification: certificationNew };
}

