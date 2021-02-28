import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialbuttonBmCComponent } from './socialbutton-bm-c.component';

describe('SocialbuttonBmCComponent', () => {
  let component: SocialbuttonBmCComponent;
  let fixture: ComponentFixture<SocialbuttonBmCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialbuttonBmCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialbuttonBmCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
