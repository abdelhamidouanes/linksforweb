import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoBmComponent } from './logo-bm.component';

describe('LogoBmComponent', () => {
  let component: LogoBmComponent;
  let fixture: ComponentFixture<LogoBmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoBmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoBmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
