import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { TgssHorizontalNavigationComponent } from '@tgss/components/navigation/horizontal/horizontal.component';
import { TgssNavigationService } from '@tgss/components/navigation/navigation.service';
import { TgssNavigationItem } from '@tgss/components/navigation/navigation.types';

@Component({
    selector       : 'tgss-horizontal-navigation-spacer-item',
    templateUrl    : './spacer.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TgssHorizontalNavigationSpacerItemComponent implements OnInit, OnDestroy
{
    @Input() item: TgssNavigationItem;
    @Input() name: string;

    private _tgssHorizontalNavigationComponent: TgssHorizontalNavigationComponent;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _tgssNavigationService: TgssNavigationService
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Get the parent navigation component
        this._tgssHorizontalNavigationComponent = this._tgssNavigationService.getComponent(this.name);

        // Subscribe to onRefreshed on the navigation component
        this._tgssHorizontalNavigationComponent.onRefreshed.pipe(
            takeUntil(this._unsubscribeAll)
        ).subscribe(() => {

            // Mark for check
            this._changeDetectorRef.markForCheck();
        });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }
}
