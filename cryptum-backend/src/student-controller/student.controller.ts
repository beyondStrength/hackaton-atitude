import { Controller, Post, Body } from '@nestjs/common';
import { CryptumService } from '../cryptum-service/cryptum-service.service';
import { Academy } from 'src/interfaces/academy.interface';
import { Student } from 'src/interfaces/student.interface';

@Controller('student-controller')
export class StudentController {

    constructor(private readonly cryptumService: CryptumService) {}

    @Post('createStudentWallet') // Define the HTTP endpoint, e.g., POST /student-controller/createStudentWallet
    async createStudentWallet(@Body() student: Student) {
        const wallet = await this.cryptumService.createStudentWallet(student);
        return { wallet };
    }

    @Post('addAcademy') // Define another HTTP endpoint, e.g., POST /student-controller/addAcademy
    async addAcademy(@Body() data: { academy: Academy; studentWallet: any }) {
        const { academy, studentWallet: studentWallet } = data;
        const result = await this.cryptumService.addAcademy(academy, studentWallet);
        return { result };
    }
}
