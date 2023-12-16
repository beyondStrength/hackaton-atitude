import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentController } from './student/controllers/student.controller';
import { StudentService } from './student/service/student.service';

@Module({
  imports: [],
  controllers: [AppController, StudentController],
  providers: [AppService, StudentService],
})
export class AppModule {}
