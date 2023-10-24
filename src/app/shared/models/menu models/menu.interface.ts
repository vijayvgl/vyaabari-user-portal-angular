export interface MenuI {
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
    children?: ChildMenuI[]
    icon: string
    link?: any
    module?: any[],
    svg:any
}

export interface ChildMenuI {
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
    icon: string
    children?: ChildMenuI[]
    link?: any,
    module?: any[]
}