import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrfproductComponent } from './addrfproduct.component';

describe('AddrfproductComponent', () => {
  let component: AddrfproductComponent;
  let fixture: ComponentFixture<AddrfproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddrfproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddrfproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
