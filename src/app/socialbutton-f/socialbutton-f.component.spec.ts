import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialbuttonFComponent } from './socialbutton-f.component';

describe('SocialbuttonFComponent', () => {
  let component: SocialbuttonFComponent;
  let fixture: ComponentFixture<SocialbuttonFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialbuttonFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialbuttonFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
