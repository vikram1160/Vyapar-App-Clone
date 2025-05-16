import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockSummaryComponent } from './stock-summary.component';

describe('StockSummaryComponent', () => {
  let component: StockSummaryComponent;
  let fixture: ComponentFixture<StockSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
