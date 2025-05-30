import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, } from '@angular/router';

@Component({
  selector: 'app-add-sale',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-sale.component.html',
  styleUrl: './add-sale.component.css'
})
export class AddSaleComponent {
  isCash: boolean = false;
  customerName: string = '';
  phoneNumber: string = '';
  invoiceNumber: number | undefined;
  i: number = 0;
  name: string = ' ';
  qty: number = 0;
  unit: string = ' ';
  price: number = 0;
  discount: number = 0;
  tax: number = 0;

  invoiceDate: Date = new Date();
  roundOff: number = 0;
  products: any[] = []
  item: any;
  transactionType: string = '';
  paymentType: string = ''; 
  amount: number = 0;
  balanceDue: number = 0; 

  firstItem: any

  constructor(private router: Router) { }

  units = ['NONE', 'KG', 'Litre', 'Piece'];
  taxes = ['5%', '12%', '18%'];

  items = [{ name: '', qty: 1, unit: 'NONE', price: 0, discount: 0, tax: '5%' }];

  addRow() {
    this.items.push({ name: '', qty: 1, unit: 'NONE', price: 0, discount: 0, tax: '5%' });
  }

  calculateAmount(item: any): number {
    let discountAmount = (this.price * this.qty * this.discount) / 100;
    let taxAmount = (this.price * this.qty - discountAmount) / 100
    return this.price * this.qty - discountAmount + taxAmount;

  }

  calculateTotal(): number {
    return this.items.reduce((sum, item) => sum + this.calculateAmount(item), 0)
  }



  saveInvoice() {
    const invoiceId = this.products.length + 1;

    const quantity = Number(this.qty) || 0;
    const pricePerUnit = Number(this.price) || 0;
    const discount = Number(this.discount) || 0;

    const amount = quantity * pricePerUnit; // ✅ This must come before balanceDue
    const balanceDue = amount - discount;

    const invoiceData = {
      id: invoiceId,
      invoice_no: this.invoiceNumber,
      invoice_date: this.invoiceDate,
      party_Name: this.name || '',
      transactions_type: quantity.toString(),
      payment_type: pricePerUnit.toFixed(2),
      amount: amount.toFixed(2),
      balance_due: balanceDue.toFixed(2),

    };

    if (this.invoiceNumber && this.invoiceDate) {
      this.router.navigate(['/sale-invioces'], {
        queryParams: invoiceData
      });
    } else {
      alert("Please fill in the Invoice No and Date");
    }

    console.log('Invoice Saved:', {
      id: invoiceId,
      qty: quantity,
      price: pricePerUnit,
      discount: discount,
      totalAmount: balanceDue,
    });
  }

  // amount = (this.qty * this.price) - this.discount;


  // saveInvoice() {
  //   const invoiceId = this.products.length + 1;

  //   const invoiceData = {
  //     id: invoiceId,
  //     invoice_no: this.invoiceNumber,
  //     invoice_date: this.invoiceDate,  // Lowercase 'd' to match ngOnInit
  //     item_name: this.item.name || '', // Safe access with optional chaining
  //     item_qty: this.item.qty|| '',
  //     item_unit: this.item.unit || '',
  //     item_price: this.item.price || '',
  //     item_discount: this.item.discount || '',
  //     items: JSON.stringify(this.items) // Only if you need this for something else
  //   };

  //   this.router.navigate(['/sale-invioces'], {
  //     queryParams: invoiceData
  //   });

  //   console.log('Invoice Saved:', {
  //     id: invoiceId,
  //     invoiceNumber: this.invoiceNumber,
  //     items: this.items
  //   });
  // }


}
