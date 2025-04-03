import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SadinavComponent } from './sadinav.component';

describe('SadinavComponent', () => {
  let component: SadinavComponent;
  let fixture: ComponentFixture<SadinavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SadinavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SadinavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
