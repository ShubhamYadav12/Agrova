import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'agrova-app-navigation',
    standalone: true,
    imports: [
        RouterLink,
        RouterLinkActive,
    ],
    templateUrl: './app-navigation.html',
    styleUrl: './app-navigation.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppNavigation { }