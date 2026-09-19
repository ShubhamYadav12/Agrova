export type AgrovaActorType =
    | 'farmer'
    | 'farm-member'
    | 'veterinarian'
    | 'agronomist'
    | 'laboratory';

export interface AgrovaActor {
    type: AgrovaActorType;
    label: string;
    description: string;
    icon: string;
}