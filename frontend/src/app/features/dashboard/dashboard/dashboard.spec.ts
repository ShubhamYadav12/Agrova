import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Dashboard } from './dashboard';

describe('Dashboard', () => {
    let component: Dashboard;
    let fixture: ComponentFixture<Dashboard>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [Dashboard],
        }).compileComponents();

        fixture = TestBed.createComponent(Dashboard);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render the Agrova heading', () => {
        const element: HTMLElement = fixture.nativeElement;

        expect(element.querySelector('h1')?.textContent).toContain(
            'Good morning, Farmer',
        );
    });

    it('should render the farm snapshot section', () => {
        const element: HTMLElement = fixture.nativeElement;

        expect(element.querySelector('#snapshot-title')?.textContent).toContain(
            'Your farm at a glance',
        );
    });

    it('should render the four farm snapshot cards', () => {
        const element: HTMLElement = fixture.nativeElement;

        expect(element.querySelectorAll('agrova-card').length).toBe(7);
    });

    it('should render the Animals snapshot', () => {
        const element: HTMLElement = fixture.nativeElement;

        expect(element.textContent).toContain('Animals');
        expect(element.textContent).toContain('No animal data yet');
    });

    it('should render the Fields snapshot', () => {
        const element: HTMLElement = fixture.nativeElement;

        expect(element.textContent).toContain('Fields');
        expect(element.textContent).toContain('No field data yet');
    });

    it('should render today priorities', () => {
        const element: HTMLElement = fixture.nativeElement;

        expect(element.textContent).toContain("Today's priorities");
        expect(element.textContent).toContain('No priorities');
    });

    it('should render recent activity', () => {
        const element: HTMLElement = fixture.nativeElement;

        expect(element.textContent).toContain('Recent activity');
    });

    it('should render farm status', () => {
        const element: HTMLElement = fixture.nativeElement;

        expect(element.textContent).toContain('Farm status');
        expect(element.textContent).toContain('Getting started');
    });

    it('should render the farm setup action', () => {
        const element: HTMLElement = fixture.nativeElement;

        const button = element.querySelector(
            'button[agrovaButton]',
        ) as HTMLButtonElement | null;

        expect(button).not.toBeNull();
        expect(button?.textContent).toContain('Set up farm');
    });
});