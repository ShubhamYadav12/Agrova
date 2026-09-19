import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';

@Component({
  selector: 'agrova-loading',
  standalone: true,
  templateUrl: './agrova-loading.html',
  styleUrl: './agrova-loading.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgrovaLoading {
  @Input() label = 'Loading';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() fullscreen = false;
}