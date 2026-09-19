export type AgrovaScopeType =
    | 'farm'
    | 'field'
    | 'crop'
    | 'animal'
    | 'resource';

export interface AgrovaScope {
    type: AgrovaScopeType;
    label: string;
    description: string;
    icon: string;
}