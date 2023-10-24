import { IAPI } from "./api.interface";

export class API implements IAPI {
    keyword: 'success' | 'failed' | 'failure'
    message: string
    data: any
    count?: any
}