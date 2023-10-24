import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { TgssVerticalNavigationComponent } from '@tgss/components/navigation/vertical/vertical.component';
import { TgssNavigationService } from '@tgss/components/navigation/navigation.service';
import { TgssNavigationItem } from '@tgss/components/navigation/navigation.types';

@Component({
    selector       : 'tgss-vertical-navigation-spacer-item',
    templateUrl    : './spacer.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TgssVerticalNavigationSpacerItemComponent implements OnInit, OnDestroy
{
    @Input() item: TgssNavigationItem;
    @Input() name: string;

    private _tgssVerticalNavigationComponent: TgssVerticalNavigationComponent;
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
        this._tgssVerticalNavigationComponent = this._tgssNavigationService.getComponent(this.name);

        // Subscribe to onRefreshed on the navigation component
        this._tgssVerticalNavigationComponent.onRefreshed.pipe(
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
