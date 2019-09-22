import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturerHomePagePage } from './lecturer-home-page.page';

describe('LecturerHomePagePage', () => {
  let component: LecturerHomePagePage;
  let fixture: ComponentFixture<LecturerHomePagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturerHomePagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturerHomePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
