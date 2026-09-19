import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import {
  AgrovaIconButton,
  AgrovaIconButtonSize,
  AgrovaIconButtonVariant,
} from './agrova-icon-button';

@Component({
  standalone: true,
  imports: [AgrovaIconButton],
  template: `
    <button
      agrovaIconButton
      [variant]="variant"
      [size]="size"
      [ariaLabel]="ariaLabel"
      [title]="title"
      [disabled]="disabled"
    >
      ★
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class TestHostComponent {
  @Input() variant: AgrovaIconButtonVariant = 'ghost';
  @Input() size: AgrovaIconButtonSize = 'md';
  @Input() ariaLabel = 'Test icon button';
  @Input() title = '';
  @Input() disabled = false;
}

describe('AgrovaIconButton', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
  });

  function getButton(): HTMLButtonElement {
    return fixture.nativeElement.querySelector(
      'button.agrova-icon-button',
    ) as HTMLButtonElement;
  }

  it('should create', () => {
    expect(getButton()).toBeTruthy();
  });

  it('should render projected icon content', () => {
    const button = getButton();

    expect(button.textContent).toContain('★');
  });

  it('should apply the default variant and size', () => {
    const button = getButton();

    expect(
      button.classList.contains('agrova-icon-button--ghost'),
    ).toBe(true);

    expect(
      button.classList.contains('agrova-icon-button--md'),
    ).toBe(true);
  });

  it('should apply a custom variant', () => {
    fixture.componentRef.setInput(
      'variant',
      'primary' as AgrovaIconButtonVariant,
    );

    fixture.detectChanges();

    const button = getButton();

    expect(
      button.classList.contains('agrova-icon-button--primary'),
    ).toBe(true);

    expect(
      button.classList.contains('agrova-icon-button--ghost'),
    ).toBe(false);
  });

  it('should apply a custom size', () => {
    fixture.componentRef.setInput(
      'size',
      'lg' as AgrovaIconButtonSize,
    );

    fixture.detectChanges();

    const button = getButton();

    expect(
      button.classList.contains('agrova-icon-button--lg'),
    ).toBe(true);

    expect(
      button.classList.contains('agrova-icon-button--md'),
    ).toBe(false);
  });

  it('should expose the accessible label', () => {
    fixture.componentRef.setInput(
      'ariaLabel',
      'Add animal',
    );

    fixture.detectChanges();

    const button = getButton();

    expect(button.getAttribute('aria-label')).toBe('Add animal');
  });

  it('should expose the title when provided', () => {
    fixture.componentRef.setInput(
      'title',
      'Add animal',
    );

    fixture.detectChanges();

    const button = getButton();

    expect(button.getAttribute('title')).toBe('Add animal');
  });

  it('should emit pressed when clicked', () => {
    const hostButton = getButton();

    const iconButton = fixture.debugElement
      .query(
        (debugElement) =>
          debugElement.nativeElement === hostButton,
      )
      .injector.get(AgrovaIconButton);

    let pressed = 0;

    iconButton.pressed.subscribe(() => {
      pressed++;
    });

    hostButton.click();

    expect(pressed).toBe(1);
  });

  it('should not emit pressed when disabled', () => {
    fixture.componentRef.setInput('disabled', true);

    fixture.detectChanges();

    const button = getButton();

    const iconButton = fixture.debugElement
      .query(
        (debugElement) =>
          debugElement.nativeElement === button,
      )
      .injector.get(AgrovaIconButton);

    let pressed = 0;

    iconButton.pressed.subscribe(() => {
      pressed++;
    });

    button.click();

    expect(pressed).toBe(0);
  });

  it('should expose the disabled state', () => {
    fixture.componentRef.setInput('disabled', true);

    fixture.detectChanges();

    const button = getButton();

    expect(button.disabled).toBe(true);
    expect(button.hasAttribute('disabled')).toBe(true);
  });
});