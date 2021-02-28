import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialmediaSmComponent } from './socialmedia-sm.component';

describe('SocialmediaSmComponent', () => {
  let component: SocialmediaSmComponent;
  let fixture: ComponentFixture<SocialmediaSmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialmediaSmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialmediaSmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
