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
                        title: "Sexto Ano",
                        status: "Aprovado",
                    },
                    {
                        title: "Sétimo Ano",
                        status: "Aprovado",
                    },
                    {
                        title: "Oitavo Ano",
                        status: "Aprovado",
                    },
                    {
                        title: "Nono Ano",
                        status: "Aprovado",
                    },
                ],
            },
            {
                name: "Nave Rio",
                Certification: [
                    {
                        title: "Primeiro Ano",
                        status: "Aprovado",
                    },
                    {
                        title: "Segundo Ano",
                        status: "Aprovado",
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
                        title: "Sexto Ano",
                        status: "Aprovado",
                    },
                    {
                        title: "Sétimo Ano",
                        status: "Aprovado",
                    },
                    {
                        title: "Oitavo Ano",
                        status: "Aprovado",
                    },
                    {
                        title: "Nono Ano",
                        status: "Aprovado",
                    },
                    {
                        title: "Primeiro Ano",
                        status: "Aprovado",
                    },
                ],
            },
            {
                name: "Nave Rio",
                Certification: [
                    {
                        title: "Primeiro Ano",
                        status: "Aprovado",
                    },
                    {
                        title: "Segundo Ano",
                        status: "Aprovado",
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

