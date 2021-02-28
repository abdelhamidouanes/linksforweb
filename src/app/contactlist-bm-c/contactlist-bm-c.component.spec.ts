import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactlistBmCComponent } from './contactlist-bm-c.component';

describe('ContactlistBmCComponent', () => {
  let component: ContactlistBmCComponent;
  let fixture: ComponentFixture<ContactlistBmCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactlistBmCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactlistBmCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
