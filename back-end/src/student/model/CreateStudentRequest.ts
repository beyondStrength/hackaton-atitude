import { StudentInterface } from "./StudentInterface";

export interface CreateStudentRequest extends Omit<StudentInterface, "hash">{
    
}
