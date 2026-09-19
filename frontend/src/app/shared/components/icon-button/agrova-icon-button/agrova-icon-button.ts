import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

export type AgrovaIconButtonVariant =
  | 'primary'
  | 'secondary'
  | 'ghost'
  | 'danger';

export type AgrovaIconButtonSize =
  | 'sm'
  | 'md'
  | 'lg';

@Component({
  selector: 'button[agrovaIconButton]',
  standalone: true,
  templateUrl: './agrova-icon-button.html',
  styleUrl: './agrova-icon-button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[attr.type]': '"button"',
    '[attr.aria-label]': 'ariaLabel',
    '[attr.title]': 'title || null',
    '[attr.disabled]': 'disabled ? "" : null',
    '[class]': 'buttonClasses',
    '(click)': 'handleClick($event)',
  },
})
export class AgrovaIconButton {
  @Input() variant: AgrovaIconButtonVariant = 'ghost';
  @Input() size: AgrovaIconButtonSize = 'md';
  @Input({ required: true }) ariaLabel = '';
  @Input() title = '';
  @Input() disabled = false;

  @Output() pressed = new EventEmitter<void>();

  get buttonClasses(): string {
    return [
      'agrova-icon-button',
      `agrova-icon-button--${this.variant}`,
      `agrova-icon-button--${this.size}`,
    ].join(' ');
  }

  protected handleClick(event: MouseEvent): void {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    this.pressed.emit();
  }
}