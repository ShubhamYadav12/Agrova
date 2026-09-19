import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AgrovaBadge } from '../../../shared/components/badge/agrova-badge/agrova-badge';
import { AgrovaCardComponent } from '../../../shared/components/card/agrova-card/agrova-card';

@Component({
    selector: 'app-activities',
    standalone: true,
    imports: [
        AgrovaBadge,
        AgrovaCardComponent,
    ],
    templateUrl: './activities.html',
    styleUrl: './activities.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Activities { }