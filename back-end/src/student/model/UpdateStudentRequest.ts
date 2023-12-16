import { LegalRepresentativeInterface } from "./StudentInterface"

export interface UpdateStudentRequest {
    id: string
    name?: string
    birthDate?: string
    documentNumber?: string
    legalRepresentative?: LegalRepresentativeInterface
    email?: string
    phone?: string
}