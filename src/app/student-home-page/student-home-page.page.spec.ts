import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentHomePagePage } from './student-home-page.page';

describe('StudentHomePagePage', () => {
  let component: StudentHomePagePage;
  let fixture: ComponentFixture<StudentHomePagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentHomePagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentHomePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
