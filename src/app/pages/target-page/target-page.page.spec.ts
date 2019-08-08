import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetPagePage } from './target-page.page';

describe('TargetPagePage', () => {
  let component: TargetPagePage;
  let fixture: ComponentFixture<TargetPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TargetPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
