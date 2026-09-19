export type FarmActorType =
    | 'farmer'
    | 'family-member'
    | 'veterinarian'
    | 'agronomist'
    | 'provider';

export type FarmScopeType =
    | 'farm'
    | 'field'
    | 'crop'
    | 'animal'
    | 'resource';

export type FarmDomain =
    | 'farm'
    | 'pashu'
    | 'khet'
    | 'resources'
    | 'activities'
    | 'tasks'
    | 'weather'
    | 'economics'
    | 'intelligence';

export interface FarmContext {
    farmName: string;
    farmSubtitle: string;

    actor: FarmActorType;
    actorLabel: string;
    actorSubtitle: string;

    scopeType: FarmScopeType;
    scopeLabel: string;
    scopeSubtitle: string;

    domain: FarmDomain;
    section: string;
    current: string;
    sectionRoute: string;

    objectLabel?: string;
}