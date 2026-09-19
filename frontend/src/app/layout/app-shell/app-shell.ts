import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AppContext } from '../app-context/app-context';
import { AppNavigation } from '../app-navigation/app-navigation';

@Component({
    selector: 'agrova-app-shell',
    standalone: true,
    imports: [
        RouterOutlet,
        AppNavigation,
        AppContext,
    ],
    templateUrl: './app-shell.html',
    styleUrl: './app-shell.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppShell { }