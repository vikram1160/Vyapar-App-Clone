import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleInviocesComponent } from './sale-invioces.component';

describe('SaleInviocesComponent', () => {
  let component: SaleInviocesComponent;
  let fixture: ComponentFixture<SaleInviocesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaleInviocesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaleInviocesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
