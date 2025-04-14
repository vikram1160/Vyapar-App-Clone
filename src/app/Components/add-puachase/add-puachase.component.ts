import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-add-puachase',
  standalone: true,
  imports: [FormsModule,FormsModule,CommonModule],
  templateUrl: './add-puachase.component.html',
  styleUrl: './add-puachase.component.css'
})
export class AddPuachaseComponent {



  isCash: boolean = false;
  selectedCustomer: string = '';
  phoneNumber: string = '';
  invoiceNumber: number =  5;
  invoiceDate: string = new Date().toISOString().split('T')[0];
  roundOff: number = 0;

  customers = ['Customer 1', 'Customer 2', 'Customer 3'];
  units = ['NONE', 'KG', 'Litre', 'Piece'];
  taxes = ['5%', '12%', '18%'];

  items = [{ name: '', qty: 1, unit: 'NONE', price: 0, discount: 0, tax: '5%' }];

  addRow() {
    this.items.push({ name: '', qty: 1, unit: 'NONE', price: 0, discount: 0, tax: '5%' });
  }

  calculateAmount(item: any): number {
    let discountAmount = (item.price * item.qty * item.discount) / 100;
    let taxAmount = ((item.price * item.qty - discountAmount) * parseFloat(item.tax)) / 100;
    return item.price * item.qty - discountAmount + taxAmount;
  }

  calculateTotal(): number {
    return this.items.reduce((sum, item) => sum + this.calculateAmount(item), 0) + this.roundOff;
  }

  saveInvoice() {
    console.log('Invoice Saved', { invoiceNumber: this.invoiceNumber, items: this.items });
  }




  // purchaseForm: FormGroup;
  // purchaseItems: any[] = [];
  // states = [
  //   { label: 'Maharashtra', value: 'Maharashtra' },
  //   { label: 'Karnataka', value: 'Karnataka' },
  //   { label: 'Delhi', value: 'Delhi' }
  // ];
  // units = [
  //   { label: 'NONE', value: 'NONE' },
  //   { label: 'KG', value: 'KG' },
  //   { label: 'Litre', value: 'Litre' }
  // ];
  // taxOptions = [
  //   { label: '5%', value: 5 },
  //   { label: '12%', value: 12 },
  //   { label: '18%', value: 18 }
  // ];
  // paymentTypes = [
  //   { label: 'Cash', value: 'Cash' },
  //   { label: 'Card', value: 'Card' },
  //   { label: 'UPI', value: 'UPI' }
  // ];

  // constructor(private fb: FormBuilder) {
  //   this.purchaseForm = this.fb.group({
  //     search: [''],
  //     phone: [''],
  //     billNumber: [''],
  //     billDate: [new Date()],
  //     state: ['Maharashtra'],
  //     paymentType: ['Cash'],
  //     roundOff: [0],
  //     total: [{ value: 0, disabled: true }]
  //   });
  // }

  // addRow() {
  //   this.purchaseItems.push({
  //     name: '',
  //     description: '',
  //     qty: 1,
  //     unit: 'NONE',
  //     price: 0,
  //     discount: 0,
  //     tax: 5
  //   });
  //   this.calculateTotal();
  // }

  // calculateAmount(item: any) {
  //   const discountAmount = (item.price * item.qty * item.discount) / 100;
  //   const taxableAmount = item.price * item.qty - discountAmount;
  //   const taxAmount = (taxableAmount * item.tax) / 100;
  //   return taxableAmount + taxAmount;
  // }

  // calculateTotal() {
  //   let total = this.purchaseItems.reduce((sum, item) => sum + this.calculateAmount(item), 0);
  //   total = total + (this.purchaseForm.value.roundOff || 0);
  //   this.purchaseForm.patchValue({ total });
  // }
}