export interface IAPI {
    keyword: 'success' | 'failed' | 'failure',
    message: string | null,
    data: any,
    count?: any,
}