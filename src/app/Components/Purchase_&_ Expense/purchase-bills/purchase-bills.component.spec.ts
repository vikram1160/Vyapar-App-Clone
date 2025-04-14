import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseBillsComponent } from './purchase-bills.component';

describe('PurchaseBillsComponent', () => {
  let component: PurchaseBillsComponent;
  let fixture: ComponentFixture<PurchaseBillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurchaseBillsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseBillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
