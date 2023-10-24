export interface IAPI {
    message?: string;
    data?: any;
    status?: string;
    response_code?: string;
    response_message?: string;
}



export class API implements IAPI {
    message?: string;
    data?: any;
    status?: string;
    response_code?: string;
    response_message?: string;
}