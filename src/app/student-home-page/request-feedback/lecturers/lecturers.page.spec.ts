import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturersPage } from './lecturers.page';

describe('LecturersPage', () => {
  let component: LecturersPage;
  let fixture: ComponentFixture<LecturersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
