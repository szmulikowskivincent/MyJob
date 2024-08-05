import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelTableComponent } from './excel-table.component';

describe('ExcelTableComponent', () => {
  let component: ExcelTableComponent;
  let fixture: ComponentFixture<ExcelTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExcelTableComponent]
    });
    fixture = TestBed.createComponent(ExcelTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
