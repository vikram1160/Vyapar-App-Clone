import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncShareComponent } from './sync-share.component';

describe('SyncShareComponent', () => {
  let component: SyncShareComponent;
  let fixture: ComponentFixture<SyncShareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SyncShareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SyncShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
