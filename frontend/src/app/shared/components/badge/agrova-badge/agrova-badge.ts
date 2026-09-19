import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type AgrovaBadgeVariant =
  | 'default'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info';

@Component({
  selector: 'agrova-badge',
  standalone: true,
  templateUrl: './agrova-badge.html',
  styleUrl: './agrova-badge.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgrovaBadge {
  readonly label = input<string>('');
  readonly variant = input<AgrovaBadgeVariant>('default');
}