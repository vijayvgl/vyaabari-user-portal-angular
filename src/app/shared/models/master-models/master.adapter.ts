import { Injectable } from '@angular/core';
import { IAPI } from '../API/api.interface';
import { API } from '../API/api.model';
import { ICommissions, MerchantCommission, TransactionLimit } from './master.interface';

@Injectable({
    providedIn: 'root'
})
export class MasterSettingsAdapterService {
    private api: API

    private transactionLimit: TransactionLimit;

    constructor() { }


    // Change Password Adapter
    adaptChangePassword(data: any): IAPI {
        this.api = new API()
        this.api.keyword = data?.status == true ? 'success' : 'failed',
            this.api.data = []
        this.api.message = data?.message ?? ''
        return this.api
    }

    // Merchant Commission Adapter 
    adaptMerchantCommission(data: any): IAPI {
        this.api = new API()
        this.api.keyword = data?.status == true ? 'success' : 'failed',
            this.api.data = data?.data.map((ele: any) => this.adaptMerchantCommissionView(ele)) ?? []
        this.api.message = data?.message ?? ''
        return this.api
    }

    private adaptMerchantCommissionView(data: any): ICommissions {
        let val = new MerchantCommission()
        val.from = Number(data?.from) ?? 0
        val.to = Number(data?.to) ?? 0
            val.commission = Number(data?.commission) ?? 0
        return val
    }

    // Transaction Limit Adapter
    adaptTransactionLimit(data: any): IAPI {
        this.api = new API()
        this.api.keyword = data?.status == true ? 'success' : 'failed',
            this.api.data = data?.data[0] ? this.adaptTransactionLimitView(data?.data[0]) : []
        this.api.message = data?.message ?? ''
        return this.api
    }


    private adaptTransactionLimitView(data: any) {
        this.transactionLimit = new TransactionLimit();
        this.transactionLimit.day = Number(data?.day) ?? 0;
        this.transactionLimit.week = Number(data?.week) ?? 0
        this.transactionLimit.month = Number(data?.month) ?? 0
        return this.transactionLimit
    }



}