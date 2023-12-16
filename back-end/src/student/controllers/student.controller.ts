import { Body, Controller, Post, Put } from '@nestjs/common';
import { StudentService } from '../service/student.service';
import { StudentInterface } from '../model/StudentInterface';
import { CreateStudentRequest } from '../model/CreateStudentRequest';
import { UpdateStudentRequest } from '../model/UpdateStudentRequest';

@Controller('student')
export class StudentController {
    private studentService: StudentService

    @Post()
    async create(@Body() input: CreateStudentRequest): Promise<Pick<StudentInterface, "id">> {
        return await this.studentService.create(input)
    }
    @Put('/update')
    async update(@Body() input: UpdateStudentRequest): Promise<Pick<UpdateStudentRequest, "id">> {
        return await this.studentService.update(input)
    }
}
