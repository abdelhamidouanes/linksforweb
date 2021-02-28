import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallbuttonSmComponent } from './callbutton-sm.component';

describe('CallbuttonSmComponent', () => {
  let component: CallbuttonSmComponent;
  let fixture: ComponentFixture<CallbuttonSmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallbuttonSmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallbuttonSmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
