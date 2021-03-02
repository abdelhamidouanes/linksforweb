import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerategraduationComponent } from './generategraduation.component';

describe('GenerategraduationComponent', () => {
  let component: GenerategraduationComponent;
  let fixture: ComponentFixture<GenerategraduationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerategraduationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerategraduationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
