import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyStatementComponent } from './party-statement.component';

describe('PartyStatementComponent', () => {
  let component: PartyStatementComponent;
  let fixture: ComponentFixture<PartyStatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartyStatementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartyStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
