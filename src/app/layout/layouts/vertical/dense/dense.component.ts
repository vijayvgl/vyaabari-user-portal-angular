import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { TgssMediaWatcherService } from '@tgss/services/media-watcher';
import { TgssNavigationService, TgssVerticalNavigationComponent } from '@tgss/components/navigation';
import { Navigation } from 'app/core/navigation/navigation.types';
import { NavigationService } from 'app/core/navigation/navigation.service';
import { MenuI } from 'app/shared/models/menu models/menu.interface';
import { ADMIN_NAVIGATIONS } from 'app/core/config/navigation.model';
import { MatDialog } from '@angular/material/dialog';
import { AddCreditsComponent } from 'app/modules/admin/add-credits/add-credits.component';
import { SupportInfoComponent } from 'app/modules/admin/support-info/support-info.component';

@Component({
    selector: 'dense-layout',
    templateUrl: './dense.component.html',
    encapsulation: ViewEncapsulation.None
})
export class DenseLayoutComponent implements OnInit, OnDestroy {
    isScreenSmall: boolean;
    navigation: MenuI[]
    navigationAppearance: any = 'default';
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    showLogo: boolean = true;
    /**
     * Constructor
     */
    constructor(
        public dialog: MatDialog,
        private _activatedRoute: ActivatedRoute,
        private _router: Router,
        private _navigationService: NavigationService,
        private _tgssMediaWatcherService: TgssMediaWatcherService,
        private _tgssNavigationService: TgssNavigationService
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
        // // Subscribe to navigation data
        // this._navigationService.navigation$
        //     .pipe(takeUntil(this._unsubscribeAll))
        //     .subscribe((navigation: Navigation) => {
        //         this.navigation = navigation;
        //     });
        this.navigation = ADMIN_NAVIGATIONS

        // Subscribe to media changes
        this._tgssMediaWatcherService.onMediaChange$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(({ matchingAliases }) => {

                // Check if the screen is small
                this.isScreenSmall = !matchingAliases.includes('md');

                // // Change the navigation appearance
                // this.navigationAppearance = this.isScreenSmall ? 'default' : 'dense';
            });
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

    /**
     * Toggle the navigation appearance
     */
    toggleNavigationAppearance(): void {
        this.navigationAppearance = (this.navigationAppearance === 'default' ? 'dense' : 'default');
        this.showLogo = !this.showLogo
    }

    openAddCedits() {
        this.dialog.open(AddCreditsComponent, {
          width: '400px'
        });
      }

      supportInfo() {
        this.dialog.open(SupportInfoComponent, {
        });
      }
}
