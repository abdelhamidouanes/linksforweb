import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionSsComponent } from './solution-ss.component';

describe('SolutionSsComponent', () => {
  let component: SolutionSsComponent;
  let fixture: ComponentFixture<SolutionSsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolutionSsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionSsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
