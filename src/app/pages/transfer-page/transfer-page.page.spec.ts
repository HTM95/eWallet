import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferPagePage } from './transfer-page.page';

describe('TransferPagePage', () => {
  let component: TransferPagePage;
  let fixture: ComponentFixture<TransferPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
