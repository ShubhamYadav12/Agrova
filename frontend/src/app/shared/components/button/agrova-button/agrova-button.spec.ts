import { Component, input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { describe, expect, it, beforeEach } from 'vitest';

import {
  AgrovaButton,
  AgrovaButtonSize,
  AgrovaButtonVariant,
} from './agrova-button';

@Component({
  standalone: true,
  imports: [AgrovaButton],
  template: `
    <button
      agrovaButton
      [variant]="variant()"
      [size]="size()"
      [disabled]="disabled()"
      [loading]="loading()"
      [fullWidth]="fullWidth()"
      [type]="type()">
      {{ label() }}
    </button>
  `,
})
class TestHostComponent {
  readonly variant = input<AgrovaButtonVariant>('primary');
  readonly size = input<AgrovaButtonSize>('md');
  readonly disabled = input(false);
  readonly loading = input(false);
  readonly fullWidth = input(false);
  readonly type = input<'button' | 'submit' | 'reset'>('button');
  readonly label = input('Test Button');
}

describe('AgrovaButton', () => {
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
      'button[agrovaButton]',
    ) as HTMLButtonElement;
  }

  it('should render', () => {
    const button = fixture.debugElement.query(
      By.directive(AgrovaButton),
    );

    expect(button).toBeTruthy();
  });

  it('should use primary variant by default', () => {
    const button = getButton();

    expect(
      button.classList.contains('agrova-button--primary'),
    ).toBe(true);
  });

  it('should apply the selected variant', () => {
    fixture.componentRef.setInput('variant', 'secondary');
    fixture.detectChanges();

    const button = getButton();

    expect(
      button.classList.contains('agrova-button--secondary'),
    ).toBe(true);
  });

  it('should apply the selected size', () => {
    fixture.componentRef.setInput('size', 'lg');
    fixture.detectChanges();

    const button = getButton();

    expect(
      button.classList.contains('agrova-button--lg'),
    ).toBe(true);
  });

  it('should support ghost variant', () => {
    fixture.componentRef.setInput('variant', 'ghost');
    fixture.detectChanges();

    const button = getButton();

    expect(
      button.classList.contains('agrova-button--ghost'),
    ).toBe(true);
  });

  it('should support danger variant', () => {
    fixture.componentRef.setInput('variant', 'danger');
    fixture.detectChanges();

    const button = getButton();

    expect(
      button.classList.contains('agrova-button--danger'),
    ).toBe(true);
  });

  it('should set disabled state', () => {
    fixture.componentRef.setInput('disabled', true);
    fixture.detectChanges();

    const button = getButton();

    expect(button.disabled).toBe(true);
    expect(button.hasAttribute('disabled')).toBe(true);
  });

  it('should set loading state', () => {
    fixture.componentRef.setInput('loading', true);
    fixture.detectChanges();

    const button = getButton();

    expect(button.disabled).toBe(true);
    expect(button.hasAttribute('disabled')).toBe(true);
    expect(button.getAttribute('aria-busy')).toBe('true');

    const spinner = button.querySelector(
      '.agrova-button__spinner',
    );

    expect(spinner).toBeTruthy();
  });

  it('should support full width', () => {
    fixture.componentRef.setInput('fullWidth', true);
    fixture.detectChanges();

    const button = getButton();

    expect(
      button.classList.contains('agrova-button--full-width'),
    ).toBe(true);
  });

  it('should support submit type', () => {
    fixture.componentRef.setInput('type', 'submit');
    fixture.detectChanges();

    const button = getButton();

    expect(button.getAttribute('type')).toBe('submit');
  });
});