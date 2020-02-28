import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtdproductComponent } from './addtdproduct.component';

describe('AddtdproductComponent', () => {
  let component: AddtdproductComponent;
  let fixture: ComponentFixture<AddtdproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtdproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtdproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
