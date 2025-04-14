import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappMarketingComponent } from './whatsapp-marketing.component';

describe('WhatsappMarketingComponent', () => {
  let component: WhatsappMarketingComponent;
  let fixture: ComponentFixture<WhatsappMarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatsappMarketingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatsappMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
