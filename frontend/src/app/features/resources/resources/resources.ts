import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AgrovaBadge } from '../../../shared/components/badge/agrova-badge/agrova-badge';
import { AgrovaCardComponent } from '../../../shared/components/card/agrova-card/agrova-card';

@Component({
    selector: 'app-resources',
    standalone: true,
    imports: [
        AgrovaBadge,
        AgrovaCardComponent,
    ],
    templateUrl: './resources.html',
    styleUrl: './resources.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Resources { }