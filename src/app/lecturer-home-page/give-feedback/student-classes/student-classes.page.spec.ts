import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentClassesPage } from './student-classes.page';

describe('StudentClassesPage', () => {
  let component: StudentClassesPage;
  let fixture: ComponentFixture<StudentClassesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentClassesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentClassesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
