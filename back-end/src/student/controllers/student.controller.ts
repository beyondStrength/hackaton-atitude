import { Controller, Post, Put } from '@nestjs/common';
@Controller('student')
export class StudentController {
    @Post()
    create(): string {
        return this.create()    
    }

    @Put()
    update(): string {
        return this.update()
    }
}
