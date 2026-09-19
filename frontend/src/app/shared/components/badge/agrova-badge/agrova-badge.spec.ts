import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgrovaBadge } from './agrova-badge';

describe('AgrovaBadge', () => {
  let component: AgrovaBadge;
  let fixture: ComponentFixture<AgrovaBadge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgrovaBadge],
    }).compileComponents();

    fixture = TestBed.createComponent(AgrovaBadge);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the supplied label', () => {
    fixture.componentRef.setInput('label', 'Active');
    fixture.detectChanges();

    const badge = fixture.nativeElement.querySelector('.agrova-badge');

    expect(badge.textContent.trim()).toBe('Active');
  });

  it('should use the default variant by default', () => {
    const badge = fixture.nativeElement.querySelector('.agrova-badge');

    expect(badge.classList.contains('agrova-badge--default')).toBe(true);
  });

  it('should apply the success variant', () => {
    fixture.componentRef.setInput('variant', 'success');
    fixture.detectChanges();

    const badge = fixture.nativeElement.querySelector('.agrova-badge');

    expect(badge.classList.contains('agrova-badge--success')).toBe(true);
  });

  it('should apply the warning variant', () => {
    fixture.componentRef.setInput('variant', 'warning');
    fixture.detectChanges();

    const badge = fixture.nativeElement.querySelector('.agrova-badge');

    expect(badge.classList.contains('agrova-badge--warning')).toBe(true);
  });

  it('should apply the danger variant', () => {
    fixture.componentRef.setInput('variant', 'danger');
    fixture.detectChanges();

    const badge = fixture.nativeElement.querySelector('.agrova-badge');

    expect(badge.classList.contains('agrova-badge--danger')).toBe(true);
  });

  it('should apply the info variant', () => {
    fixture.componentRef.setInput('variant', 'info');
    fixture.detectChanges();

    const badge = fixture.nativeElement.querySelector('.agrova-badge');

    expect(badge.classList.contains('agrova-badge--info')).toBe(true);
  });
   it('should render an empty label when no label is supplied', () => {
    const badge = fixture.nativeElement.querySelector(
      '.agrova-badge',
    ) as HTMLElement;

    expect(badge.textContent.trim()).toBe('');
  });

  it('should remove the previous variant class when variant changes', () => {
    fixture.componentRef.setInput('variant', 'success');
    fixture.detectChanges();

    let badge = fixture.nativeElement.querySelector(
      '.agrova-badge',
    ) as HTMLElement;

    expect(
      badge.classList.contains('agrova-badge--success'),
    ).toBe(true);

    fixture.componentRef.setInput('variant', 'danger');
    fixture.detectChanges();

    badge = fixture.nativeElement.querySelector(
      '.agrova-badge',
    ) as HTMLElement;

    expect(
      badge.classList.contains('agrova-badge--danger'),
    ).toBe(true);

    expect(
      badge.classList.contains('agrova-badge--success'),
    ).toBe(false);
  });

  it('should update the rendered label when label changes', () => {
    fixture.componentRef.setInput('label', 'Active');
    fixture.detectChanges();

    let badge = fixture.nativeElement.querySelector(
      '.agrova-badge',
    ) as HTMLElement;

    expect(badge.textContent.trim()).toBe('Active');

    fixture.componentRef.setInput('label', 'Inactive');
    fixture.detectChanges();

    badge = fixture.nativeElement.querySelector(
      '.agrova-badge',
    ) as HTMLElement;

    expect(badge.textContent.trim()).toBe('Inactive');
  });
});