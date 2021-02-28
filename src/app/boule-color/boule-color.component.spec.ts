import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BouleColorComponent } from './boule-color.component';

describe('BouleColorComponent', () => {
  let component: BouleColorComponent;
  let fixture: ComponentFixture<BouleColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BouleColorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BouleColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
