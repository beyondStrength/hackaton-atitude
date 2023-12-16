import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentController } from './student-controller/student.controller';
import { CryptumService } from './cryptum-service/cryptum-service.service';

@Module({
  imports: [],
  controllers: [AppController, StudentController],
  providers: [AppService, CryptumService],
})
export class AppModule {}
