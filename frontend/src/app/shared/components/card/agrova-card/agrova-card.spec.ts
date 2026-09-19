import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgrovaCardComponent } from './agrova-card';

@Component({
  standalone: true,
  imports: [AgrovaCardComponent],
  template: `
    <agrova-card>
      <span class="test-content">Card content</span>
    </agrova-card>
  `,
})
class TestHostComponent {}

describe('AgrovaCardComponent', () => {
  let fixture: ComponentFixture<AgrovaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgrovaCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AgrovaCardComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render projected content', () => {
    const hostFixture = TestBed.createComponent(TestHostComponent);
    hostFixture.detectChanges();

    const content = hostFixture.nativeElement.querySelector('.test-content');

    expect(content).toBeTruthy();
    expect(content.textContent.trim()).toBe('Card content');
  });

  it('should not be interactive by default', () => {
    const card = fixture.nativeElement.querySelector('.agrova-card');

    expect(card.classList.contains('agrova-card--interactive')).toBe(false);
    expect(card.getAttribute('tabindex')).toBeNull();
  });
});