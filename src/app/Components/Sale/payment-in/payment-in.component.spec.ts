import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentInComponent } from './payment-in.component';

describe('PaymentInComponent', () => {
  let component: PaymentInComponent;
  let fixture: ComponentFixture<PaymentInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentInComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
