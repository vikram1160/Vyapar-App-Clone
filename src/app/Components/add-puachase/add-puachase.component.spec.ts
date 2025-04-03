import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPuachaseComponent } from './add-puachase.component';

describe('AddPuachaseComponent', () => {
  let component: AddPuachaseComponent;
  let fixture: ComponentFixture<AddPuachaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPuachaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPuachaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
