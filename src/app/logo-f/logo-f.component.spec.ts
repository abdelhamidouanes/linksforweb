import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoFComponent } from './logo-f.component';

describe('LogoFComponent', () => {
  let component: LogoFComponent;
  let fixture: ComponentFixture<LogoFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
