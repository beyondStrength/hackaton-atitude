import { Injectable } from '@nestjs/common';
import { Academy } from 'src/interfaces/academy.interface';
import { Student } from 'src/interfaces/student.interface';
import { scholarIdWallet } from 'src/constants/scholarIdWallet';
const CryptumSDK = require('cryptum-sdk')
const protocol = 'POLYGON'
const sdk = new CryptumSDK({
    environment: "testnet",
    apiKey: 'bmTX2wPwNQnc38no9vctuhIASJ6skZbs',
})

@Injectable()
export class CryptumService {

    async createStudentWallet(student: Student) {
        const mnemonic = sdk.wallet.generateRandomMnemonic();
        console.log(mnemonic)
        return await sdk.wallet.generateWallet({
            protocol,
            mnemonic: mnemonic
        })
    }

    async addAcademy(academy: Academy, studentWallet: string) {
        return await sdk.nft.create({
            wallet: scholarIdWallet,
            protocol,
            symbol: 'Scholar.Id',
            name: 'history',
            type: 'ERC721'
        })
    }
}
