import { Injectable, signal } from '@angular/core';

import {
    AgrovaScope,
    AgrovaScopeType,
} from './agrova-scope';

@Injectable({
    providedIn: 'root',
})
export class AgrovaScopeService {
    private readonly currentScope = signal<AgrovaScope>({
        type: 'farm',
        label: 'Entire farm',
        description: 'All connected farm context',
        icon: '🏡',
    });

    readonly scope = this.currentScope.asReadonly();

    setScope(type: AgrovaScopeType): void {
        this.currentScope.set(this.resolveScope(type));
    }

    private resolveScope(type: AgrovaScopeType): AgrovaScope {
        switch (type) {
            case 'field':
                return {
                    type,
                    label: 'Field',
                    description: 'A specific farm field',
                    icon: '🌾',
                };

            case 'crop':
                return {
                    type,
                    label: 'Crop',
                    description: 'A crop within a field',
                    icon: '🌱',
                };

            case 'animal':
                return {
                    type,
                    label: 'Animal',
                    description: 'A specific farm animal',
                    icon: '🐄',
                };

            case 'resource':
                return {
                    type,
                    label: 'Resource',
                    description: 'A farm resource',
                    icon: '🧰',
                };

            case 'farm':
            default:
                return {
                    type: 'farm',
                    label: 'Entire farm',
                    description: 'All connected farm context',
                    icon: '🏡',
                };
        }
    }
}