export interface Academy {
    name: string
    periods: Period[]
}

interface Period {
    title: string
    status: Status
}

enum Status {
    IN_PROGRESS,
    APPROVED,
    INTERRUPTED
}
