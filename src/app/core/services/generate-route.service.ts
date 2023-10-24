import { Injectable } from "@angular/core";
import { ReplaySubject } from "rxjs";
import { Router } from "@angular/router";
import { decodedToken } from "../helpers/token.helper";
import { checkNull } from "../custom-validations/return-functions";

@Injectable({
    providedIn: "root"
})

export class GenerateRouteService {


    constructor(private route: Router) {

    }

    public queueCount = new ReplaySubject<any>(0);

    /** queue count */

    setQueueCount(property: any, storeProp: boolean = false) {
        if (storeProp) {
            localStorage.setItem('queueCount', JSON.stringify(property));
        }
        this.queueCount.next(property);
    }

    getQueueCount() {
        return this.queueCount;
    }

    navigateRouteMessage(portalName: any, page: any, idObj: any) {

        if (page?.portal == 'admin') {
            switch (page?.page) {
                // Admin
                case "account_update":
                    {
                        this.route.navigate([`merchant-onboard/view/${page?.id}`], { queryParams: { type: 0 } });
                    }
                    break;
                case "low_balance": {
                    this.route.navigate([`/wallet-maintenance`]);
                }
                    break;
                case "new_commission": {
                    window.scrollTo({
                        left: 0,
                        top: 50,
                        behavior: "smooth",
                    });
                    this.route.navigate([`merchant-onboard/view/${page?.id}`], { queryParams: { type: 0 } });
                }
                    break;
                case "cashback": {
                    this.route.navigate([`/cash-back-management/view/${page?.id}`]);
                }
                    break;
                case "cash_request": {
                    this.route.navigate([`/cash-request/view/${page?.id}`]);
                }
                    break;
                default: {
                    this.route.navigate([`/notification-details`]);
                }
                    break;
            }
        } else if (page?.portal == 'merchant') {
            switch (page?.page) {
                //Merchant
                case "account_approved": {
                    this.route.navigate([`/merchant/my-account`]);
                }
                    break;
                case "balance_reminder": {
                    this.route.navigate([`/merchant/wallet-maintenance`]);
                }
                    break;
                case "cash_req_verified": {
                    this.route.navigate([`/merchant/cash-request`])
                }
                    break;

                default: {
                    this.route.navigate([`/notification-details`]);
                }
                    break;
            }
        }
    }
}