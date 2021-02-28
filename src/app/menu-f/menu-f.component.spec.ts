import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuFComponent } from './menu-f.component';

describe('MenuFComponent', () => {
  let component: MenuFComponent;
  let fixture: ComponentFixture<MenuFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
