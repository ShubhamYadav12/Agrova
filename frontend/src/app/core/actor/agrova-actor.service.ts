import { Injectable, signal } from '@angular/core';

import {
    AgrovaActor,
    AgrovaActorType,
} from './agrova-actor';

@Injectable({
    providedIn: 'root',
})
export class AgrovaActorService {
    private readonly currentActor = signal<AgrovaActor>({
        type: 'farmer',
        label: 'Farmer',
        description: 'Farm owner',
        icon: '👨‍🌾',
    });

    readonly actor = this.currentActor.asReadonly();

    setActor(type: AgrovaActorType): void {
        const actor = this.resolveActor(type);

        this.currentActor.set(actor);
    }

    private resolveActor(type: AgrovaActorType): AgrovaActor {
        switch (type) {
            case 'farm-member':
                return {
                    type,
                    label: 'Farm member',
                    description: 'Family / farm member',
                    icon: '👥',
                };

            case 'veterinarian':
                return {
                    type,
                    label: 'Veterinarian',
                    description: 'Animal health professional',
                    icon: '🩺',
                };

            case 'agronomist':
                return {
                    type,
                    label: 'Agricultural expert',
                    description: 'Crop and field professional',
                    icon: '🌱',
                };

            case 'laboratory':
                return {
                    type,
                    label: 'Diagnostic laboratory',
                    description: 'Testing and measured evidence',
                    icon: '🧪',
                };

            case 'farmer':
            default:
                return {
                    type: 'farmer',
                    label: 'Farmer',
                    description: 'Farm owner',
                    icon: '👨‍🌾',
                };
        }
    }
}