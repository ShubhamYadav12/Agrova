import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AgrovaBadge } from '../../../shared/components/badge/agrova-badge/agrova-badge';
import { AgrovaButton } from '../../../shared/components/button/agrova-button/agrova-button';
import { AgrovaCardComponent } from '../../../shared/components/card/agrova-card/agrova-card';
import { AgrovaInput } from '../../../shared/components/input/agrova-input/agrova-input';

@Component({
    selector: 'app-crop-stage',
    standalone: true,
    imports: [
        AgrovaBadge,
        AgrovaButton,
        AgrovaCardComponent,
        AgrovaInput,
    ],
    templateUrl: './crop-stage.html',
    styleUrl: './crop-stage.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CropStage { }