import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTransactionComponent } from './all-transaction.component';

describe('AllTransactionComponent', () => {
  let component: AllTransactionComponent;
  let fixture: ComponentFixture<AllTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllTransactionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
