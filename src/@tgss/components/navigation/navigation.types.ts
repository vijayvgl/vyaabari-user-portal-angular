import { IsActiveMatchOptions, Params, QueryParamsHandling } from '@angular/router';

export interface TgssNavigationItem {
    id?: string;
    title?: string;
    subtitle?: string;
    type:
    | 'aside'
    | 'basic'
    | 'collapsable'
    | 'divider'
    | 'group'
    | 'spacer';
    hidden?: boolean;
    active?: boolean;
    disabled?: boolean;
    tooltip?: string;
    link?: string;
    fragment?: string;
    preserveFragment?: boolean;
    queryParams?: Params | null;
    queryParamsHandling?: QueryParamsHandling | null;
    externalLink?: boolean;
    target?:
    | '_blank'
    | '_self'
    | '_parent'
    | '_top'
    | string;
    exactMatch?: boolean;
    isActiveMatchOptions?: IsActiveMatchOptions;
    function?: (item: TgssNavigationItem) => void;
    classes?: {
        title?: string;
        subtitle?: string;
        icon?: string;
        wrapper?: string;
    };
    icon?: string;
    badge?: {
        title?: string;
        classes?: string;
    };
    children?: TgssNavigationItem[];
    meta?: any;
    module?:any
}

export type TgssVerticalNavigationAppearance =
    | 'default'
    | 'compact'
    | 'dense'
    | 'thin'
    | 'merchant'

export type TgssVerticalNavigationMode =
    | 'over'
    | 'side';

export type TgssVerticalNavigationPosition =
    | 'left'
    | 'right';
