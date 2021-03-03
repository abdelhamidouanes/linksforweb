import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrillePageComponent } from './grille-page.component';

describe('GrillePageComponent', () => {
  let component: GrillePageComponent;
  let fixture: ComponentFixture<GrillePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrillePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrillePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
