import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckOutDetailsComponent } from './check-out-details.component';

describe('CheckOutDetailsComponent', () => {
  let component: CheckOutDetailsComponent;
  let fixture: ComponentFixture<CheckOutDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckOutDetailsComponent]
    });
    fixture = TestBed.createComponent(CheckOutDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
