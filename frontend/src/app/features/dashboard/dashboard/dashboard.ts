import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { AgrovaBadge } from '../../../shared/components/badge/agrova-badge/agrova-badge';
import { AgrovaButton } from '../../../shared/components/button/agrova-button/agrova-button';
import { AgrovaCardComponent } from '../../../shared/components/card/agrova-card/agrova-card';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [
        RouterLink,
        AgrovaBadge,
        AgrovaButton,
        AgrovaCardComponent,
    ],
    templateUrl: './dashboard.html',
    styleUrl: './dashboard.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Dashboard { }