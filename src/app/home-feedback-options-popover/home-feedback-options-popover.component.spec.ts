import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFeedbackOptionsPopoverComponent } from './home-feedback-options-popover.component';

describe('HomeFeedbackOptionsPopoverComponent', () => {
  let component: HomeFeedbackOptionsPopoverComponent;
  let fixture: ComponentFixture<HomeFeedbackOptionsPopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeFeedbackOptionsPopoverComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFeedbackOptionsPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
