import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'agrova-card',
  standalone: true,
  templateUrl: './agrova-card.html',
  styleUrl: './agrova-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgrovaCardComponent {
  readonly interactive = input(false);
}