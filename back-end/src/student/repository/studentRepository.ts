import { Injectable } from "@nestjs/common";
import { CreateStudentRequest } from "../model/CreateStudentRequest";

@Injectable()
export class StudentRepository {
    create(student: CreateStudentRequest) {

    }
}
