import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { BooleanInput } from '@angular/cdk/coercion';
import { Subject, takeUntil } from 'rxjs';
import { decodedToken } from 'app/core/helpers/token.helper';
import { checkNull } from 'app/core/custom-validations/return-functions';
import { MatDialog } from '@angular/material/dialog';
import { UpiQrComponent } from 'app/modules/admin/upi-qr/upi-qr.component';
import { CertificateComponent } from 'app/modules/admin/certificate/certificate.component';
import { SessionUserService } from 'app/api/session-user.service';
import { PopupInterface, PopupService } from 'app/core/services/popup.service';
import { ProfileComponent } from 'app/modules/admin/profile/profile.component';
import { SupportInfoComponent } from 'app/modules/admin/support-info/support-info.component';
import { ShopAddressComponent } from 'app/modules/admin/shop-address/shop-address.component';

interface Menulist {
    title: string;
    path: string;
    svg?:any;
}
interface Accountlist {
    title: string;
    path: string;
    svg?:any;
}

@Component({
    selector: 'user',
    templateUrl: './user.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs: 'user'
})
export class UserComponent implements OnInit, OnDestroy {
    /* eslint-disable @typescript-eslint/naming-convention */
    static ngAcceptInputType_showAvatar: BooleanInput;
    /* eslint-enable @typescript-eslint/naming-convention */

    @Input() showAvatar: boolean = true;
    user: any;
    menuIcon: boolean = true;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        public dialog: MatDialog,
        private _changeDetectorRef: ChangeDetectorRef,
        private _router: Router,
        private userService: SessionUserService,
        private pop: PopupService
    ) {
    }
accountItem: Accountlist[] = [
    { title: 'Profile', path: 'profile' , svg:"profile" },
    { title: 'Shop Address', path: 'shop-address' , svg:"shop_address" },
    { title: 'Manage PIN', path: '/change-pin' , svg:"manage_pin" },
    { title: 'Change Password', path: '/change-password' , svg:"change_pswd" },
]
    menuItem: Menulist[] = [
        { title: 'UPI QR', path: 'upi-qr' , svg:"upi_qr" },
        { title: 'QR Activation', path: '/qr-activation' , svg:"qr_activation" },
        { title: 'POS Activation', path: '/pos-activation' , svg:"pos_activation" },
        { title: 'Certificate', path: 'certificate' , svg:"certificate" },
        { title: 'FAQ', path: '/faq' , svg:"faq" },

     
    ]

    changeIcon() {
        // this.menuIcon = this.menuIcon == true ? false : true;
    }


    menuOpen() {
        this.menuIcon = false
    }

    menuClose() {
        this.menuIcon = true
    }

    ngOnInit(): void {
        let token = decodedToken()
        this.user = token
    }
    ngOnDestroy(): void {
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }
    updateUserStatus(status: string): void {
    }

    changePassword() {
        this._router.navigate(['/change-password'])
    }
    signOut(): void {
        let data: PopupInterface = {
            title: 'Confirmation',
            message: 'Do you want to signout now!',
            type: 'warning',
            confirm_label: 'Signout',
            
        }
        this.pop.show(data).afterClosed().subscribe({
            next: (res: any) => {
                if (res == 'confirmed') {
                    this.userService.logout()
                }
            },
            error: (err: any) => {

            },
            complete: () => {

            }
        })
        // 
    }



    navigate(data): void {
        if (data == 'upi-qr') {
            this.openQRcode();
        } else if (data == 'certificate') {
            this.certificateClick();
        } else if (data == 'profile') {
             this.viewProfile();
            } else if (data == 'shop-address') {
                this.shopAddress();
        }else {
            console.log(data);
            this._router.navigate([data])
        }
    }

    checkNull(data: any) {
        return checkNull(data)
    }

    openQRcode() {
        this.dialog.open(UpiQrComponent, {
            width: '400px'
        });
    }
    certificateClick() {
        this.dialog.open(CertificateComponent, {
            width: '900px'
        });
    }
    viewProfile() {
            this.dialog.open(ProfileComponent, {
                width: '600px'
            });
         }
         shopAddress() {
            this.dialog.open(ShopAddressComponent, {
                width: '600px'
            });
         }
         supportInfo() {
            this.dialog.open(SupportInfoComponent, {
                width: '900px'
            });
         }  
   
}
