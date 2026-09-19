import {
    ChangeDetectionStrategy,
    Component,
    inject,
} from '@angular/core';
import { RouterLink } from '@angular/router';

import { FarmContextService } from '../../core/context/farm-context.service';

@Component({
    selector: 'agrova-app-context',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './app-context.html',
    styleUrl: './app-context.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppContext {
    private readonly farmContext = inject(FarmContextService);

    readonly context = this.farmContext.context;
}