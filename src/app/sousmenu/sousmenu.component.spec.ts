import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SousmenuComponent } from './sousmenu.component';

describe('SousmenuComponent', () => {
  let component: SousmenuComponent;
  let fixture: ComponentFixture<SousmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SousmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SousmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
