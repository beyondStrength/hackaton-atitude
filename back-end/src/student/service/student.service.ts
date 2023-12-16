import { Injectable } from '@nestjs/common';
import { StudentInterface } from '../model/StudentInterface';
import { CreateStudentRequest } from '../model/CreateStudentRequest';
import { StudentRepository } from '../repository/studentRepository';
import { UpdateStudentRequest } from '../model/UpdateStudentRequest';
import { ScholaridClient } from '../clients/ScholaridClient';

@Injectable()
export class StudentService {
    private studentRepository: StudentRepository
    private scholaridClient: ScholaridClient
    async create(student: CreateStudentRequest): Promise<Pick<StudentInterface, "id">> {
        const newStudent: StudentInterface = await this.studentRepository.create(student)
        const studentOnBCE = await this.scholaridClient.getById(newStudent)
        newStudent.hash = studentOnBCE.id
        await this.scholaridClient.update(newStudent)

        return newStudent;
    } 

    async update(request: UpdateStudentRequest): Promise<StudentInterface> {

        // TODO: Buscar na base de dados da escola
        let studentForUpdate = await this.studentRepository.getById(request.id);

        // Alterar apenas dados enviados no request
        if (request.documentNumber) {
           studentForUpdate.documentNumber = request.documentNumber 
        }
        if (request.email) {
            studentForUpdate.email = request.email
        }
        if (request.phone) {
            studentForUpdate.phone = request.phone
        }
        if (request.legalRepresentative) {
            studentForUpdate.legalRepresentative = request.legalRepresentative
        }
        if (request.name) {
            studentForUpdate.name = request.name
        }

        // Atualiza no DB da escola
        await this.studentRepository.update(studentForUpdate);

        // Atualiza o dnft
        return await this.scholaridClient.update(studentForUpdate)
    }
}
