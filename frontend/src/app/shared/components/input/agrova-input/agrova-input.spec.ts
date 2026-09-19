import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, expect, it, beforeEach } from 'vitest';

import { AgrovaInput } from './agrova-input';

describe('AgrovaInput', () => {
  let component: AgrovaInput;
  let fixture: ComponentFixture<AgrovaInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgrovaInput],
    }).compileComponents();

    fixture = TestBed.createComponent(AgrovaInput);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  function getInput(): HTMLInputElement {
    return fixture.nativeElement.querySelector(
      'input.agrova-input__field',
    ) as HTMLInputElement;
  }

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the label', () => {
    fixture.componentRef.setInput('label', 'Animal Name');
    fixture.detectChanges();

    const label = fixture.nativeElement.querySelector(
      '.agrova-input__label',
    ) as HTMLLabelElement | null;

    expect(label).toBeTruthy();
    expect(label?.textContent).toContain('Animal Name');
  });

  it('should emit value changes', () => {
    const emittedValues: string[] = [];

    component.valueChange.subscribe((value: string) => {
      emittedValues.push(value);
    });

    const input = getInput();

    input.value = 'Ganga';
    input.dispatchEvent(new Event('input'));

    expect(emittedValues).toEqual(['Ganga']);
    expect(component.value).toBe('Ganga');
  });

  it('should show required indicator', () => {
    fixture.componentRef.setInput('label', 'Animal Name');
    fixture.componentRef.setInput('required', true);
    fixture.detectChanges();

    const required = fixture.nativeElement.querySelector(
      '.agrova-input__required',
    ) as HTMLElement | null;

    expect(required).toBeTruthy();
    expect(required?.textContent).toContain('*');
  });

  it('should show error state', () => {
    fixture.componentRef.setInput(
      'errorText',
      'Animal name is required',
    );
    fixture.detectChanges();

    expect(component.hasError).toBe(true);

    const message = fixture.nativeElement.querySelector(
      '.agrova-input__message--error',
    ) as HTMLParagraphElement | null;

    expect(message).toBeTruthy();
    expect(message?.textContent).toContain(
      'Animal name is required',
    );
  });

  it('should disable the input', () => {
    fixture.componentRef.setInput('disabled', true);
    fixture.detectChanges();

    const input = getInput();

    expect(input.disabled).toBe(true);
  });

  it('should render helper text when there is no error', () => {
    fixture.componentRef.setInput(
      'helperText',
      'Enter the animal name',
    );
    fixture.detectChanges();

    const message = fixture.nativeElement.querySelector(
      '.agrova-input__message',
    ) as HTMLParagraphElement | null;

    expect(message).toBeTruthy();
    expect(message?.textContent).toContain(
      'Enter the animal name',
    );
  });

  it('should prefer error text over helper text', () => {
    fixture.componentRef.setInput(
      'helperText',
      'Enter the animal name',
    );
    fixture.componentRef.setInput(
      'errorText',
      'Animal name is required',
    );
    fixture.detectChanges();

    const errorMessage = fixture.nativeElement.querySelector(
      '.agrova-input__message--error',
    ) as HTMLParagraphElement | null;

    expect(errorMessage).toBeTruthy();
    expect(errorMessage?.textContent).toContain(
      'Animal name is required',
    );

    const messages = fixture.nativeElement.querySelectorAll(
      '.agrova-input__message',
    );

    expect(messages.length).toBe(1);
  });
});