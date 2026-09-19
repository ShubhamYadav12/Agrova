import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type AgrovaButtonVariant =
  | 'primary'
  | 'secondary'
  | 'ghost'
  | 'danger';

export type AgrovaButtonSize =
  | 'sm'
  | 'md'
  | 'lg';

@Component({
  selector: 'button[agrovaButton]',
  standalone: true,
  templateUrl: './agrova-button.html',
  styleUrl: './agrova-button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'buttonClasses()',
    '[attr.type]': 'type()',
    '[attr.disabled]': 'disabled() || loading() ? "" : null',
    '[attr.aria-busy]': 'loading() ? "true" : null',
  },
})
export class AgrovaButton {
  readonly variant = input<AgrovaButtonVariant>('primary');
  readonly size = input<AgrovaButtonSize>('md');
  readonly disabled = input(false);
  readonly loading = input(false);
  readonly fullWidth = input(false);
  readonly type = input<'button' | 'submit' | 'reset'>('button');

  protected buttonClasses(): string {
    return [
      'agrova-button',
      `agrova-button--${this.variant()}`,
      `agrova-button--${this.size()}`,
      this.fullWidth() ? 'agrova-button--full-width' : '',
      this.loading() ? 'agrova-button--loading' : '',
    ]
      .filter(Boolean)
      .join(' ');
  }
}