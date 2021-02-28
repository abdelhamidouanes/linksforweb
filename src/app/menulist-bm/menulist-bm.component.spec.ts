import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenulistBmComponent } from './menulist-bm.component';

describe('MenulistBmComponent', () => {
  let component: MenulistBmComponent;
  let fixture: ComponentFixture<MenulistBmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenulistBmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenulistBmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
