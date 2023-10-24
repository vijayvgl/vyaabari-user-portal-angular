import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { TgssMediaWatcherService } from '@tgss/services/media-watcher';
import { TgssNavigationService, TgssVerticalNavigationComponent } from '@tgss/components/navigation';
import { UserService } from 'app/core/user/user.service';
import { decodedToken, getToken } from 'app/core/helpers/token.helper';
import { MenuI } from 'app/shared/models/menu models/menu.interface';
import { MessagingService } from 'app/core/services/messaging.service';

@Component({
    selector: 'classy-layout',
    templateUrl: './classy.component.html',
    encapsulation: ViewEncapsulation.None
})
export class ClassyLayoutComponent implements OnInit, OnDestroy {
    isScreenSmall: boolean;
    navigation: MenuI[];
    user: any;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _tgssNavigationService: TgssNavigationService,
    ) {

    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for current year
     */
    get currentYear(): number {
        return new Date().getFullYear();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Subscribe to the user service
        // this._userService.user$
        //     .pipe((takeUntil(this._unsubscribeAll)))
        //     .subscribe((user: User) => {
        //         this.user = user;
        //     });

        // Subscribe to media changes
        // this._tgssMediaWatcherService.onMediaChange$
        //     .pipe(takeUntil(this._unsubscribeAll))
        //     .subscribe(({ matchingAliases }) => {

        //         // Check if the screen is small
        //         this.isScreenSmall = !matchingAliases.includes('md');
        //     });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle navigation
     *
     * @param name
     */
    toggleNavigation(name: string): void {
        // Get the navigation
        const navigation = this._tgssNavigationService.getComponent<TgssVerticalNavigationComponent>(name);


        if (navigation) {
            // Toggle the opened status
            navigation.toggle();
        }
    }
}
