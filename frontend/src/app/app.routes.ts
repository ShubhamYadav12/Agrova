import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
    },
    {
        path: 'dashboard',
        loadComponent: () =>
            import('./features/dashboard/dashboard/dashboard').then(
                (m) => m.Dashboard,
            ),
    },
    {
        path: 'farmer',
        loadComponent: () =>
            import('./features/farmer/farmer/farmer').then(
                (m) => m.Farmer,
            ),
    },
    {
        path: 'farm',
        loadComponent: () =>
            import('./features/farm/farm/farm').then(
                (m) => m.Farm,
            ),
    },
    {
        path: 'pashu',
        loadComponent: () =>
            import('./features/pashu/pashu/pashu').then(
                (m) => m.Pashu,
            ),
    },

    {
        path: 'pashu/health',
        loadComponent: () =>
            import('./features/pashu/health/health/health').then(
                (m) => m.Health,
            ),
    },
    {
        path: 'pashu/animal/new',
        loadComponent: () =>
            import('./features/pashu/animal/animal').then(
                (m) => m.Animal,
            ),
    },
    {
        path: 'khet',
        loadComponent: () =>
            import('./features/khet/khet/khet').then(
                (m) => m.Khet,
            ),
    },
    {
        path: 'khet/field/new',
        loadComponent: () =>
            import('./features/khet/field/field').then(
                (m) => m.Field,
            ),
    },
    {
        path: 'khet/crop/new',
        loadComponent: () =>
            import('./features/khet/crop/crop').then(
                (m) => m.Crop,
            ),
    },
    {
        path: 'khet/crop/stage',
        loadComponent: () =>
            import('./features/khet/crop-stage/crop-stage').then(
                (m) => m.CropStage,
            ),
    },
    {
        path: 'khet/soil',
        loadComponent: () =>
            import('./features/khet/soil/soil').then(
                (m) => m.Soil,
            ),
    },
    {
        path: 'khet/water',
        loadComponent: () =>
            import('./features/khet/water/water').then(
                (m) => m.Water,
            ),
    },
    {
        path: 'khet/crop-health',
        loadComponent: () =>
            import('./features/khet/crop-health/crop-health').then(
                (m) => m.CropHealth,
            ),
    },
    {
        path: 'khet/crop-photo',
        loadComponent: () =>
            import('./features/khet/crop-photo/crop-photo').then(
                (m) => m.CropPhoto,
            ),
    },
    {
        path: 'khet/expert',
        loadComponent: () =>
            import('./features/khet/expert-escalation/expert-escalation').then(
                (m) => m.ExpertEscalation,
            ),
    },
    {
        path: 'khet/harvest',
        loadComponent: () =>
            import('./features/khet/harvest/harvest').then(
                (m) => m.Harvest,
            ),
    },
    {
        path: 'khet/yield',
        loadComponent: () =>
            import('./features/khet/yield/yield').then(
                (m) => m.Yield,
            ),
    },
    {
        path: 'economics',
        loadComponent: () =>
            import('./features/economics/economics/economics').then(
                (m) => m.Economics,
            ),
    },
    {
        path: 'resources',
        loadComponent: () =>
            import('./features/resources/resources/resources').then(
                (m) => m.Resources,
            ),
    },

    {
        path: 'activities',
        loadComponent: () =>
            import('./features/activities/activities/activities').then(
                (m) => m.Activities,
            ),
    },
    {
        path: 'tasks',
        loadComponent: () =>
            import('./features/tasks/tasks/tasks').then(
                (m) => m.Tasks,
            ),
    },
    {
        path: 'weather',
        loadComponent: () =>
            import('./features/weather/weather/weather').then(
                (m) => m.Weather,
            ),
    },
    {
        path: 'intelligence',
        loadComponent: () =>
            import('./features/intelligence/intelligence/intelligence').then(
                (m) => m.Intelligence,
            ),
    },

];