import { Controller, Post } from '@nestjs/common';
@Controller('student')
export class StudentController {
    @Post()
    create(): string {
        return this.create()    
    }
}
