import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-sale',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './add-sale.component.html',
  styleUrl: './add-sale.component.css'
})
export class AddSaleComponent {
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
}
