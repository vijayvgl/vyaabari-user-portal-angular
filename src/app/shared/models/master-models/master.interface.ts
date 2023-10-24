

export interface ITransactionLimit {
    day: number
    week: number
    month: number
    id?: any
}

export class TransactionLimit implements ITransactionLimit {
    day: number
    week: number
    month: number
    id?: any
}


export interface ICommissions {
    id?: number
    from: number
    to: number
    commission: number
}

export class MerchantCommission implements ICommissions {
    id?: number
    from: number
    to: number
    commission: number
}