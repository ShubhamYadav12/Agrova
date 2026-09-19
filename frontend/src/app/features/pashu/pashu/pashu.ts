import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { AgrovaBadge } from '../../../shared/components/badge/agrova-badge/agrova-badge';
import { AgrovaCardComponent } from '../../../shared/components/card/agrova-card/agrova-card';

@Component({
    selector: 'app-pashu',
    standalone: true,
    imports: [
        RouterLink,
        AgrovaBadge,
        AgrovaCardComponent,
    ],
    templateUrl: './pashu.html',
    styleUrl: './pashu.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Pashu { }