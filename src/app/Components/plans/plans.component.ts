import { Component } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-plans',
  standalone: true,
  imports: [Dialog,ButtonModule,FormsModule,CommonModule],
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.css'
})
export class PlansComponent {
  silverPrice = 3999;

  visible: boolean = false;

  showDialog() {
      this.visible = true;
      
  }

  originalPrice = 8299;
  discountedPrice = 4299;
  discountPercentage = 48;

  couponCode = 'WIN60';
  couponDiscount = 0.10; // 10%
  couponApplied = true;

  useGstin = false;

  get discountAmount(): number {
    return this.discountedPrice * this.couponDiscount;
  }

  get finalAmount(): number {
    return this.discountedPrice - this.discountAmount;
  }

  removeCoupon() {
    this.couponApplied = false;
  }


  changePriceForDevice(device: string) {
    if (device === 'Desktop') {
      this.silverPrice = 2999;
    } else if (device === 'Mobile') {
      this.silverPrice = 1999;
    } else {
      this.silverPrice = 3999;
    }
  }
}
