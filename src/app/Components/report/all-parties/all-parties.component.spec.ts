import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPartiesComponent } from './all-parties.component';

describe('AllPartiesComponent', () => {
  let component: AllPartiesComponent;
  let fixture: ComponentFixture<AllPartiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllPartiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllPartiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
