import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'agrova-empty-state',
  standalone: true,
  templateUrl: './agrova-empty-state.html',
  styleUrl: './agrova-empty-state.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgrovaEmptyState {
  @Input() title = 'Nothing here yet';
  @Input() message = '';
  @Input() actionLabel = '';
  @Input() icon = '';

  @Output() action = new EventEmitter<void>();

  onAction(): void {
    this.action.emit();
  }
}