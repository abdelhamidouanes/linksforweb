import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionSsSComponent } from './description-ss-s.component';

describe('DescriptionSsSComponent', () => {
  let component: DescriptionSsSComponent;
  let fixture: ComponentFixture<DescriptionSsSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionSsSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionSsSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
