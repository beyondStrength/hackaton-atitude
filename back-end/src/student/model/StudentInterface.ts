export interface StudentInterface {
    id: string
    hash: string
    name: string
    birthDate: string
    documentNumber: string
    legalRepresentative: LegalRepresentativeInterface
    email?: string
    phone?: string
}

interface LegalRepresentativeInterface {
    id: string
    name: string
    documentNumber: string
    email?: string
    phone?: string
}
