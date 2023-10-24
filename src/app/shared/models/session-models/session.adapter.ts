import { Injectable } from "@angular/core";
import { IAPI } from "../API/api.interface";
import { API } from "../API/api.model";
import { ISESSION, ISESSIONADAPTER, SESSION } from "./session.interface";
@Injectable({
    providedIn: 'root'
})
export class SessionAdapter implements ISESSIONADAPTER {

    private api: API
    private session: SESSION
    constructor() {
        this.api = new API();
        this.session = new SESSION()
    }
    adaptAdmin(data: any): IAPI {
        this.api = new API()
        this.api.keyword = data?.status == true ? 'success' : 'failed',
            this.api.data = this.sessionAdapter(data ?? {})
        this.api.message = data?.message ?? ''
        return this.api
    }


    // Login
    adaptMerchant(data: any): IAPI {
        this.api = new API()
        this.api.keyword = data?.status == true ? 'success' : 'failed',
            this.api.data = this.sessionAdapter(data ?? {})
        this.api.message = data?.message ?? ''
        return this.api
    }



    sessionAdapter(data: any): ISESSION {
        this.session = new SESSION()
        this.session.token = data?.token ?? data?.accessToken ?? ''
        this.session.otp = data?.data[0]?.OTP ? data?.data[0]?.OTP : ''
        return this.session
    }


    // ForgotPassword 
    forgotAdapt(data: any): IAPI {
        this.api = new API()
        this.api.keyword = data?.status == true ? 'success' : 'failed',
            this.api.data = data?.data ?? []
        this.api.message = data?.message ?? ''
        return this.api
    }


    // Reset Password
    resetAdapt(data: any): IAPI {
        this.api = new API()
        this.api.keyword = data?.status == true ? 'success' : 'failed',
            this.api.data = data?.data ?? []
        this.api.message = data?.message ?? ''
        return this.api
    }

    // OTP login
    adaptOTPMerchant(data: any): IAPI {
        this.api = new API()
        this.api.keyword = data?.status == true ? 'success' : 'failed',
        this.api.data = this.sessionAdapter(data ?? {}) ?? []
        this.api.message = data?.message ?? ''
        return this.api
    }

} 