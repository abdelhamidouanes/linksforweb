import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgInformationComponent } from './msg-information.component';

describe('MsgInformationComponent', () => {
  let component: MsgInformationComponent;
  let fixture: ComponentFixture<MsgInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsgInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
