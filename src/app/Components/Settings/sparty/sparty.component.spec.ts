import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpartyComponent } from './sparty.component';

describe('SpartyComponent', () => {
  let component: SpartyComponent;
  let fixture: ComponentFixture<SpartyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpartyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
