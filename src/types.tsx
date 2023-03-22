export interface Seat {
    id: number,
    isAvailable: boolean
}

export interface Seats {
    data: Seat[],
    status: string
}