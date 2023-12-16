import { Module } from '@nestjs/common';
import { StudentController } from './student/controllers/student.controller';
import { StudentService } from './student/service/student.service';

@Module({
  imports: [],
  controllers: [ StudentController],
  providers: [StudentService],
})
export class AppModule {}
