import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleOrderComponent } from './sale-order.component';

describe('SaleOrderComponent', () => {
  let component: SaleOrderComponent;
  let fixture: ComponentFixture<SaleOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaleOrderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaleOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
