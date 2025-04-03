import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IteamsComponent } from './iteams.component';

describe('IteamsComponent', () => {
  let component: IteamsComponent;
  let fixture: ComponentFixture<IteamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IteamsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IteamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
