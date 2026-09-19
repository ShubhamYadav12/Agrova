import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, expect, it, beforeEach, vi } from 'vitest';

import { AgrovaErrorState } from './agrova-error-state';

describe('AgrovaErrorState', () => {
  let component: AgrovaErrorState;
  let fixture: ComponentFixture<AgrovaErrorState>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgrovaErrorState],
    }).compileComponents();

    fixture = TestBed.createComponent(AgrovaErrorState);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the default title', () => {
    const title = fixture.nativeElement.querySelector(
      '.agrova-error-state__title',
    );

    expect(title.textContent.trim()).toBe('Something went wrong');
  });

  it('should render a custom title', () => {
    fixture.componentRef.setInput('title', 'Unable to load animals');
    fixture.detectChanges();

    const title = fixture.nativeElement.querySelector(
      '.agrova-error-state__title',
    );

    expect(title.textContent.trim()).toBe('Unable to load animals');
  });

  it('should render the message when provided', () => {
    fixture.componentRef.setInput(
      'message',
      'Please try again later.',
    );
    fixture.detectChanges();

    const message = fixture.nativeElement.querySelector(
      '.agrova-error-state__message',
    );

    expect(message).toBeTruthy();
    expect(message.textContent.trim()).toBe(
      'Please try again later.',
    );
  });

  it('should not render the message when empty', () => {
    fixture.componentRef.setInput('message', '');
    fixture.detectChanges();

    const message = fixture.nativeElement.querySelector(
      '.agrova-error-state__message',
    );

    expect(message).toBeNull();
  });

  it('should render the error icon', () => {
    const icon = fixture.nativeElement.querySelector(
      '.agrova-error-state__icon',
    );

    expect(icon).toBeTruthy();
    expect(icon.textContent.trim()).toBe('!');
    expect(icon.getAttribute('aria-hidden')).toBe('true');
  });

  it('should render the default retry button', () => {
    const button = fixture.nativeElement.querySelector(
      '.agrova-error-state__action',
    );

    expect(button).toBeTruthy();
    expect(button.textContent.trim()).toBe('Try again');
    expect(button.getAttribute('type')).toBe('button');
  });

  it('should render a custom action label', () => {
    fixture.componentRef.setInput('actionLabel', 'Reload');
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector(
      '.agrova-error-state__action',
    );

    expect(button).toBeTruthy();
    expect(button.textContent.trim()).toBe('Reload');
  });

  it('should not render the action button when actionLabel is empty', () => {
    fixture.componentRef.setInput('actionLabel', '');
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector(
      '.agrova-error-state__action',
    );

    expect(button).toBeNull();
  });

  it('should emit retry when the action button is clicked', () => {
    const emitSpy = vi.spyOn(component.retry, 'emit');

    const button = fixture.nativeElement.querySelector(
      '.agrova-error-state__action',
    ) as HTMLButtonElement;

    expect(button).toBeTruthy();

    button.click();

    expect(emitSpy).toHaveBeenCalledTimes(1);
  });
});