import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { AgrovaBadge } from '../../../shared/components/badge/agrova-badge/agrova-badge';
import { AgrovaButton } from '../../../shared/components/button/agrova-button/agrova-button';
import { AgrovaCardComponent } from '../../../shared/components/card/agrova-card/agrova-card';
import { AgrovaInput } from '../../../shared/components/input/agrova-input/agrova-input';

@Component({
    selector: 'app-animal',
    standalone: true,
    imports: [
        RouterLink,
        AgrovaBadge,
        AgrovaButton,
        AgrovaCardComponent,
        AgrovaInput,
    ],
    templateUrl: './animal.html',
    styleUrl: './animal.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Animal { }