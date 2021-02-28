import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationSsSComponent } from './animation-ss-s.component';

describe('AnimationSsSComponent', () => {
  let component: AnimationSsSComponent;
  let fixture: ComponentFixture<AnimationSsSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimationSsSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationSsSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
