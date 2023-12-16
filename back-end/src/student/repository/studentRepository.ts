import { Injectable } from "@nestjs/common";
import { CreateStudentRequest } from "../model/CreateStudentRequest";
import { UpdateStudentRequest } from "../model/UpdateStudentRequest";
import { StudentInterface } from "../model/StudentInterface";

@Injectable()
export class StudentRepository {
    create(student: CreateStudentRequest): Promise<StudentInterface> {
        // Cria o student no banco de dados
        return 
    }

    update(student: UpdateStudentRequest): Promise<StudentInterface> {
        // Atualiza o student no banco de dados
        return
    }

    getById(studentId: string): Promise<StudentInterface> {
        // Busca no banco de dados e devolve o student
        return
    }
}
