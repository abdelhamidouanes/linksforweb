import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyrightBmComponent } from './copyright-bm.component';

describe('CopyrightBmComponent', () => {
  let component: CopyrightBmComponent;
  let fixture: ComponentFixture<CopyrightBmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopyrightBmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyrightBmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
