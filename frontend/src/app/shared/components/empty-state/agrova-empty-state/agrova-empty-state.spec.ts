import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, expect, it, beforeEach, vi } from 'vitest';

import { AgrovaEmptyState } from './agrova-empty-state';

describe('AgrovaEmptyState', () => {
  let component: AgrovaEmptyState;
  let fixture: ComponentFixture<AgrovaEmptyState>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgrovaEmptyState],
    }).compileComponents();

    fixture = TestBed.createComponent(AgrovaEmptyState);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the default title', () => {
    const title = fixture.nativeElement.querySelector(
      '.agrova-empty-state__title',
    );

    expect(title.textContent.trim()).toBe('Nothing here yet');
  });

  it('should render a custom title', () => {
    fixture.componentRef.setInput('title', 'No animals found');
    fixture.detectChanges();

    const title = fixture.nativeElement.querySelector(
      '.agrova-empty-state__title',
    );

    expect(title.textContent.trim()).toBe('No animals found');
  });

  it('should render the message when provided', () => {
    fixture.componentRef.setInput(
      'message',
      'Add your first animal to get started.',
    );
    fixture.detectChanges();

    const message = fixture.nativeElement.querySelector(
      '.agrova-empty-state__message',
    );

    expect(message).toBeTruthy();
    expect(message.textContent.trim()).toBe(
      'Add your first animal to get started.',
    );
  });

  it('should not render the message when empty', () => {
    fixture.componentRef.setInput('message', '');
    fixture.detectChanges();

    const message = fixture.nativeElement.querySelector(
      '.agrova-empty-state__message',
    );

    expect(message).toBeNull();
  });

  it('should render the icon when provided', () => {
    fixture.componentRef.setInput('icon', '🐄');
    fixture.detectChanges();

    const icon = fixture.nativeElement.querySelector(
      '.agrova-empty-state__icon',
    );

    expect(icon).toBeTruthy();
    expect(icon.textContent.trim()).toBe('🐄');
    expect(icon.getAttribute('aria-hidden')).toBe('true');
  });

  it('should render the action button when actionLabel is provided', () => {
    fixture.componentRef.setInput('actionLabel', 'Add animal');
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector(
      '.agrova-empty-state__action',
    );

    expect(button).toBeTruthy();
    expect(button.textContent.trim()).toBe('Add animal');
    expect(button.getAttribute('type')).toBe('button');
  });

  it('should not render the action button when actionLabel is empty', () => {
    fixture.componentRef.setInput('actionLabel', '');
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector(
      '.agrova-empty-state__action',
    );

    expect(button).toBeNull();
  });

  it('should emit action when the action button is clicked', () => {
    fixture.componentRef.setInput('actionLabel', 'Add animal');
    fixture.detectChanges();

    const emitSpy = vi.spyOn(component.action, 'emit');

    const button = fixture.nativeElement.querySelector(
      '.agrova-empty-state__action',
    ) as HTMLButtonElement;

    expect(button).toBeTruthy();

    button.click();

    expect(emitSpy).toHaveBeenCalledTimes(1);
  });
});