import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AgrovaBadge } from '../../../shared/components/badge/agrova-badge/agrova-badge';
import { AgrovaCardComponent } from '../../../shared/components/card/agrova-card/agrova-card';

@Component({
    selector: 'app-weather',
    standalone: true,
    imports: [
        AgrovaBadge,
        AgrovaCardComponent,
    ],
    templateUrl: './weather.html',
    styleUrl: './weather.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Weather { }