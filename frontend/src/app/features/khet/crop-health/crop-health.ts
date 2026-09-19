import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AgrovaBadge } from '../../../shared/components/badge/agrova-badge/agrova-badge';
import { AgrovaButton } from '../../../shared/components/button/agrova-button/agrova-button';
import { AgrovaCardComponent } from '../../../shared/components/card/agrova-card/agrova-card';
import { AgrovaInput } from '../../../shared/components/input/agrova-input/agrova-input';

@Component({
    selector: 'app-crop-health',
    standalone: true,
    imports: [
        AgrovaBadge,
        AgrovaButton,
        AgrovaCardComponent,
        AgrovaInput,
    ],
    templateUrl: './crop-health.html',
    styleUrl: './crop-health.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CropHealth { }