import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'agrova-input',
  standalone: true,
  templateUrl: './agrova-input.html',
  styleUrl: './agrova-input.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgrovaInput {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() type = 'text';
  @Input() value = '';
  @Input() name = '';
  @Input() id = '';
  @Input() autocomplete = 'off';

  @Input() helperText = '';
  @Input() errorText = '';

  @Input() required = false;
  @Input() disabled = false;
  @Input() readonly = false;

  @Output() valueChange = new EventEmitter<string>();

  get inputId(): string {
    return this.id || this.name || 'agrova-input';
  }

  get hasError(): boolean {
    return this.errorText.trim().length > 0;
  }

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;

    this.value = input.value;
    this.valueChange.emit(this.value);
  }
}