import { Injectable } from "@nestjs/common";
import { StudentInterface } from "../model/StudentInterface";

@Injectable()
export class ScholaridClient {
    create(student): Promise<any>  {
        // Cria no web3 e retorna o hash da wallet
        return
    }

    update(student): Promise<any>  {
        // atualiza na web3 o dNFT
        return
    }

    getById(studentId: Pick<StudentInterface, "hash">): Promise<any> {
        // Busca o aluno na web3
        return
    }
}
