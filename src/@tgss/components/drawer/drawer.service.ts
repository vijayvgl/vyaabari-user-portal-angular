import { Injectable } from '@angular/core';
import { TgssDrawerComponent } from '@tgss/components/drawer/drawer.component';

@Injectable({
    providedIn: 'root'
})
export class TgssDrawerService
{
    private _componentRegistry: Map<string, TgssDrawerComponent> = new Map<string, TgssDrawerComponent>();

    /**
     * Constructor
     */
    constructor()
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register drawer component
     *
     * @param name
     * @param component
     */
    registerComponent(name: string, component: TgssDrawerComponent): void
    {
        this._componentRegistry.set(name, component);
    }

    /**
     * Deregister drawer component
     *
     * @param name
     */
    deregisterComponent(name: string): void
    {
        this._componentRegistry.delete(name);
    }

    /**
     * Get drawer component from the registry
     *
     * @param name
     */
    getComponent(name: string): TgssDrawerComponent | undefined
    {
        return this._componentRegistry.get(name);
    }
}
