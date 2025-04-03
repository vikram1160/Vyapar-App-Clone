import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule, } from 'primeng/table';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-puachase',
  standalone: true,
  imports: [FormsModule,TableModule,DropdownModule,FormsModule,ReactiveFormsModule],
  templateUrl: './add-puachase.component.html',
  styleUrl: './add-puachase.component.css'
})
export class AddPuachaseComponent {
  purchaseForm: FormGroup;
  purchaseItems: any[] = [];
  states = [
    { label: 'Maharashtra', value: 'Maharashtra' },
    { label: 'Karnataka', value: 'Karnataka' },
    { label: 'Delhi', value: 'Delhi' }
  ];
  units = [
    { label: 'NONE', value: 'NONE' },
    { label: 'KG', value: 'KG' },
    { label: 'Litre', value: 'Litre' }
  ];
  taxOptions = [
    { label: '5%', value: 5 },
    { label: '12%', value: 12 },
    { label: '18%', value: 18 }
  ];
  paymentTypes = [
    { label: 'Cash', value: 'Cash' },
    { label: 'Card', value: 'Card' },
    { label: 'UPI', value: 'UPI' }
  ];

  constructor(private fb: FormBuilder) {
    this.purchaseForm = this.fb.group({
      search: [''],
      phone: [''],
      billNumber: [''],
      billDate: [new Date()],
      state: ['Maharashtra'],
      paymentType: ['Cash'],
      roundOff: [0],
      total: [{ value: 0, disabled: true }]
    });
  }

  addRow() {
    this.purchaseItems.push({
      name: '',
      description: '',
      qty: 1,
      unit: 'NONE',
      price: 0,
      discount: 0,
      tax: 5
    });
    this.calculateTotal();
  }

  calculateAmount(item: any) {
    const discountAmount = (item.price * item.qty * item.discount) / 100;
    const taxableAmount = item.price * item.qty - discountAmount;
    const taxAmount = (taxableAmount * item.tax) / 100;
    return taxableAmount + taxAmount;
  }

  calculateTotal() {
    let total = this.purchaseItems.reduce((sum, item) => sum + this.calculateAmount(item), 0);
    total = total + (this.purchaseForm.value.roundOff || 0);
    this.purchaseForm.patchValue({ total });
  }
}