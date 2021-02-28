import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenubuttonSmComponent } from './menubutton-sm.component';

describe('MenubuttonSmComponent', () => {
  let component: MenubuttonSmComponent;
  let fixture: ComponentFixture<MenubuttonSmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenubuttonSmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenubuttonSmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
