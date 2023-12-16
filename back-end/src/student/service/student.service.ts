import { Injectable } from '@nestjs/common';
import { StudentInterface } from '../model/studentInterface';

@Injectable()
export class ServiceService {
    create(name: StudentInterface): Pick<StudentInterface, "hash"> {
        /* 
        o create do back vai dar um get no aluno na web3, devolver o hash e
        ai ele linka o aluno da escola com o aluno na web3
        o bacen sempre devolve o hash do aluno na web3
        */
        return 'Hello World!';
    } 
}
