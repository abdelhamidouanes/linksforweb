import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecouvrirsepationSsComponent } from './decouvrirsepation-ss.component';

describe('DecouvrirsepationSsComponent', () => {
  let component: DecouvrirsepationSsComponent;
  let fixture: ComponentFixture<DecouvrirsepationSsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecouvrirsepationSsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecouvrirsepationSsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
