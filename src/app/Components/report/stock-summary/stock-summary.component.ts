import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-stock-summary',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './stock-summary.component.html',
  styleUrl: './stock-summary.component.css'
})
export class StockSummaryComponent {

   selectedDate: string = new Date().toISOString().substring(0, 10);
  
  stockData = [
    { name: 'is', salePrice: 0, purchasePrice: 0, stockQty: -9, stockValue: 0 },
    { name: 'item 1', salePrice: 0, purchasePrice: 0, stockQty: 9, stockValue: 8999.1 },
    { name: 'item one', salePrice: 2222, purchasePrice: 0, stockQty: -1, stockValue: 0 },
    { name: 'key borde', salePrice: 0, purchasePrice: 10000, stockQty: 0, stockValue: 0 },
    { name: 'laptop hub', salePrice: 12000, purchasePrice: 0, stockQty: -1, stockValue: 0 },
    { name: 'mause', salePrice: 0, purchasePrice: 200, stockQty: 1, stockValue: 200 },
    { name: 'mobails', salePrice: 0, purchasePrice: 0, stockQty: 1, stockValue: 0 },
    { name: 'monail', salePrice: 0, purchasePrice: 0, stockQty: 0, stockValue: 0 },
    { name: 'rocky', salePrice: 3400, purchasePrice: 3300, stockQty: 0, stockValue: 0 },
    { name: 'Sample Item', salePrice: 100, purchasePrice: 0, stockQty: -10, stockValue: 0 },
    { name: 'viki', salePrice: 1200, purchasePrice: 0, stockQty: -1, stockValue: 0 }
  ];

  get totalQty(): number {
    return this.stockData.reduce((acc, item) => acc + item.stockQty, 0);
  }

  get totalValue(): number {
    return this.stockData.reduce((acc, item) => acc + item.stockValue, 0);
  }

}
