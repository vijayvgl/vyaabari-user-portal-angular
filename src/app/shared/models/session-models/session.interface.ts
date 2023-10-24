import { IAPI } from "../API/api.interface"

export interface ISESSION {
    token: any,
    otp:any,

}

export class SESSION implements ISESSION {
    token: any
    otp: any
}


export interface ISESSIONADAPTER {

    adaptAdmin(data: any): IAPI;

    adaptMerchant(data: any): IAPI;

    sessionAdapter(data: any): ISESSION;

}