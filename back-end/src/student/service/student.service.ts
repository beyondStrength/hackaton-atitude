import { Inject, Injectable } from '@nestjs/common';
import { StudentInterface } from '../model/StudentInterface';
import { CreateStudentRequest } from '../model/CreateStudentRequest';
import { StudentRepository } from '../repository/studentRepository';

@Injectable()
export class ServiceService {
    private studentRepository: StudentRepository
    
    async create(student: CreateStudentRequest): Promise<Pick<StudentInterface, "id">> {
        /* 
        o create do back vai dar um get no aluno na web3, devolver o hash e
        ai ele linka o aluno da escola com o aluno na web3
        o bacen sempre devolve o hash do aluno na web3
        */
        // Cria o aluno no banco de dados da escola
        const newStudent = await this.studentRepository.create(student)
        // Busca o hash web3 

        // Adiciona o hash no objeto aluno e faz o patch no db
        newStudent.hash = bacen.id
        patchQueryDatabase(newStudent)

        // retorna o id
        return newStudent.id;
    } 
}
