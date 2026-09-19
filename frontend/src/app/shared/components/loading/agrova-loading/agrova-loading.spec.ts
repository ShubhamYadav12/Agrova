import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgrovaLoading } from './agrova-loading';

describe('AgrovaLoading', () => {
  let component: AgrovaLoading;
  let fixture: ComponentFixture<AgrovaLoading>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgrovaLoading],
    }).compileComponents();

    fixture = TestBed.createComponent(AgrovaLoading);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  function getLoading(): HTMLElement {
    return fixture.nativeElement.querySelector(
      '.agrova-loading',
    ) as HTMLElement;
  }

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the default loading state', () => {
    const loading = getLoading();

    expect(loading.getAttribute('role')).toBe('status');
    expect(loading.getAttribute('aria-label')).toBe('Loading');
  });

  it('should render the default label', () => {
    const label = fixture.nativeElement.querySelector(
      '.agrova-loading__label',
    ) as HTMLElement | null;

    expect(label).toBeTruthy();
    expect(label?.textContent).toContain('Loading');
  });

  it('should render a custom label', () => {
    fixture.componentRef.setInput(
      'label',
      'Loading animals',
    );
    fixture.detectChanges();

    const loading = getLoading();

    expect(loading.getAttribute('aria-label')).toBe(
      'Loading animals',
    );

    const label = fixture.nativeElement.querySelector(
      '.agrova-loading__label',
    ) as HTMLElement | null;

    expect(label?.textContent).toContain('Loading animals');
  });

  it('should not render the label when label is empty', () => {
    fixture.componentRef.setInput('label', '');
    fixture.detectChanges();

    const label = fixture.nativeElement.querySelector(
      '.agrova-loading__label',
    ) as HTMLElement | null;

    expect(label).toBeNull();
  });

  it('should apply the default md size class', () => {
    const loading = getLoading();

    expect(
      loading.classList.contains('agrova-loading--md'),
    ).toBe(true);
  });

  it('should apply the sm size class', () => {
    fixture.componentRef.setInput('size', 'sm');
    fixture.detectChanges();

    const loading = getLoading();

    expect(
      loading.classList.contains('agrova-loading--sm'),
    ).toBe(true);

    expect(
      loading.classList.contains('agrova-loading--md'),
    ).toBe(false);
  });

  it('should apply the lg size class', () => {
    fixture.componentRef.setInput('size', 'lg');
    fixture.detectChanges();

    const loading = getLoading();

    expect(
      loading.classList.contains('agrova-loading--lg'),
    ).toBe(true);

    expect(
      loading.classList.contains('agrova-loading--md'),
    ).toBe(false);
  });

  it('should apply the fullscreen class when fullscreen is enabled', () => {
    fixture.componentRef.setInput('fullscreen', true);
    fixture.detectChanges();

    const loading = getLoading();

    expect(
      loading.classList.contains(
        'agrova-loading--fullscreen',
      ),
    ).toBe(true);
  });

  it('should not apply the fullscreen class by default', () => {
    const loading = getLoading();

    expect(
      loading.classList.contains(
        'agrova-loading--fullscreen',
      ),
    ).toBe(false);
  });

  it('should render the spinner as decorative content', () => {
    const spinner = fixture.nativeElement.querySelector(
      '.agrova-loading__spinner',
    ) as HTMLElement | null;

    expect(spinner).toBeTruthy();
    expect(spinner?.getAttribute('aria-hidden')).toBe('true');
  });
});