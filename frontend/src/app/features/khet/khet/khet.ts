import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { AgrovaBadge } from '../../../shared/components/badge/agrova-badge/agrova-badge';
import { AgrovaCardComponent } from '../../../shared/components/card/agrova-card/agrova-card';

@Component({
    selector: 'app-khet',
    standalone: true,
    imports: [
        RouterLink,
        AgrovaBadge,
        AgrovaCardComponent,
    ],
    templateUrl: './khet.html',
    styleUrl: './khet.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Khet { }