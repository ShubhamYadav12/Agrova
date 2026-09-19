import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AgrovaBadge } from '../../../shared/components/badge/agrova-badge/agrova-badge';
import { AgrovaButton } from '../../../shared/components/button/agrova-button/agrova-button';
import { AgrovaCardComponent } from '../../../shared/components/card/agrova-card/agrova-card';

@Component({
    selector: 'app-crop-photo',
    standalone: true,
    imports: [
        AgrovaBadge,
        AgrovaButton,
        AgrovaCardComponent,
    ],
    templateUrl: './crop-photo.html',
    styleUrl: './crop-photo.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CropPhoto { }