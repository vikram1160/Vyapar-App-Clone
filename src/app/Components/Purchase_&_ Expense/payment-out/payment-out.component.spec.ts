import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentOutComponent } from './payment-out.component';

describe('PaymentOutComponent', () => {
  let component: PaymentOutComponent;
  let fixture: ComponentFixture<PaymentOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentOutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
