import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'agrova-error-state',
  standalone: true,
  templateUrl: './agrova-error-state.html',
  styleUrl: './agrova-error-state.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgrovaErrorState {
  @Input() title = 'Something went wrong';
  @Input() message = '';
  @Input() actionLabel = 'Try again';

  @Output() retry = new EventEmitter<void>();

  onRetry(): void {
    this.retry.emit();
  }
}