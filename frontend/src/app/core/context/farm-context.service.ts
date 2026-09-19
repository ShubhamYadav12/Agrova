import { Injectable, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

import {
    FarmContext,
    FarmDomain,
    FarmScopeType,
} from './farm-context';

@Injectable({
    providedIn: 'root',
})
export class FarmContextService {
    private readonly currentContext = signal<FarmContext>({
        farmName: 'My Farm',
        farmSubtitle: 'Farm context',

        actor: 'farmer',
        actorLabel: 'Farmer',
        actorSubtitle: 'Farm owner',

        scopeType: 'farm',
        scopeLabel: 'My Farm',
        scopeSubtitle: 'Whole farm',

        domain: 'farm',

        section: 'Farm',
        current: 'Today',
        sectionRoute: '/dashboard',
    });

    readonly context = this.currentContext.asReadonly();

    constructor(private readonly router: Router) {
        this.updateFromUrl(this.router.url);

        this.router.events
            .pipe(
                filter(
                    (event): event is NavigationEnd =>
                        event instanceof NavigationEnd,
                ),
            )
            .subscribe((event) => {
                this.updateFromUrl(event.urlAfterRedirects);
            });
    }

    private updateFromUrl(url: string): void {
        const path = url.split('?')[0].replace(/^\/+/, '');
        this.currentContext.set(this.resolveContext(path));
    }

    private resolveContext(path: string): FarmContext {
        if (path === 'dashboard' || path === '') {
            return this.baseContext(
                'farm',
                'Farm',
                'Today',
                '/dashboard',
            );
        }

        if (path === 'farmer') {
            return this.baseContext(
                'farm',
                'Farm',
                'Farmer',
                '/farmer',
            );
        }

        if (path === 'farm') {
            return this.baseContext(
                'farm',
                'Farm',
                'Farm',
                '/farm',
            );
        }

        if (path === 'pashu') {
            return this.baseContext(
                'pashu',
                'Pashu',
                'Pashu',
                '/pashu',
            );
        }

        if (path === 'pashu/health') {
            return this.baseContext(
                'pashu',
                'Pashu',
                'Health',
                '/pashu',
            );
        }

        if (path === 'pashu/animal/new') {
            return this.baseContext(
                'pashu',
                'Pashu',
                'Animal',
                '/pashu',
                'Animal',
            );
        }

        if (path === 'khet') {
            return this.baseContext(
                'khet',
                'Khet',
                'Khet',
                '/khet',
            );
        }

        if (path === 'khet/field/new') {
            return this.baseContext(
                'khet',
                'Khet',
                'Field',
                '/khet',
                'Field',
            );
        }

        if (path === 'khet/crop/new') {
            return this.baseContext(
                'khet',
                'Khet',
                'Crop',
                '/khet',
                'Crop',
            );
        }

        if (path === 'khet/crop/stage') {
            return this.baseContext(
                'khet',
                'Khet',
                'Crop Stage',
                '/khet',
                'Crop',
            );
        }

        if (path === 'khet/soil') {
            return this.baseContext(
                'khet',
                'Khet',
                'Soil',
                '/khet',
            );
        }

        if (path === 'khet/water') {
            return this.baseContext(
                'khet',
                'Khet',
                'Water',
                '/khet',
            );
        }

        if (path === 'khet/crop-health') {
            return this.baseContext(
                'khet',
                'Khet',
                'Crop Health',
                '/khet',
            );
        }

        if (path === 'khet/crop-photo') {
            return this.baseContext(
                'khet',
                'Khet',
                'Crop Photo',
                '/khet',
            );
        }

        if (path === 'khet/expert') {
            return this.baseContext(
                'khet',
                'Khet',
                'Expert',
                '/khet',
            );
        }

        if (path === 'khet/harvest') {
            return this.baseContext(
                'khet',
                'Khet',
                'Harvest',
                '/khet',
            );
        }

        if (path === 'khet/yield') {
            return this.baseContext(
                'khet',
                'Khet',
                'Yield',
                '/khet',
            );
        }

        if (path === 'resources') {
            return this.baseContext(
                'resources',
                'Resources',
                'Resources',
                '/resources',
            );
        }

        if (path === 'activities') {
            return this.baseContext(
                'activities',
                'Activities',
                'Activities',
                '/activities',
            );
        }

        if (path === 'tasks') {
            return this.baseContext(
                'tasks',
                'Tasks',
                'Tasks',
                '/tasks',
            );
        }

        if (path === 'weather') {
            return this.baseContext(
                'weather',
                'Weather',
                'Weather',
                '/weather',
            );
        }

        if (path === 'economics') {
            return this.baseContext(
                'economics',
                'Economics',
                'Economics',
                '/economics',
            );
        }

        if (path === 'intelligence') {
            return this.baseContext(
                'intelligence',
                'Intelligence',
                'Intelligence',
                '/intelligence',
            );
        }

        return this.baseContext(
            'farm',
            'Farm',
            'Agrova',
            '/dashboard',
        );
    }

    private baseContext(
        domain: FarmDomain,
        section: string,
        current: string,
        sectionRoute: string,
        objectLabel?: string,
    ): FarmContext {
        const scopeType: FarmScopeType =
            objectLabel === 'Animal'
                ? 'animal'
                : objectLabel === 'Field'
                    ? 'field'
                    : objectLabel === 'Crop'
                        ? 'crop'
                        : 'farm';

        return {
            farmName: 'My Farm',
            farmSubtitle: 'Farm context',

            actor: 'farmer',
            actorLabel: 'Farmer',
            actorSubtitle: 'Farm owner',

            scopeType,
            scopeLabel:
                scopeType === 'farm'
                    ? 'My Farm'
                    : objectLabel ?? 'My Farm',
            scopeSubtitle:
                scopeType === 'farm'
                    ? 'Whole farm'
                    : `${objectLabel ?? 'Farm'} context`,

            domain,
            section,
            current,
            sectionRoute,
            objectLabel,
        };
    }
}