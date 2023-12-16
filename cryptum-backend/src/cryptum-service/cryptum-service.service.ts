import { Injectable } from '@nestjs/common';
import { Academy } from 'src/interfaces/academy.interface';
import { Student } from 'src/interfaces/student.interface';
const CryptumSDK = require('cryptum-sdk')
const protocol = 'POLYGON'
const sdk = new CryptumSDK({
    environment: "testnet", // 'testnet' or 'development', 'mainnet' or 'production'
    apiKey: 'bmTX2wPwNQnc38no9vctuhIASJ6skZbs',
})

@Injectable()
export class CryptumService {

    async createStudentWallet(student: Student) {
        return await sdk.wallet.generateWallet({
            protocol
        })
    }

    async addAcademy(academy: Academy, studentAddress: string) {
        return await sdk.nft.create({
            studentAddress,
            protocol,
            symbol: 'Scholar.Id',
            name: 'history',
            type: 'ERC721'
        })
    }
}
