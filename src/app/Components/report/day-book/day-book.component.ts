import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-day-book',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './day-book.component.html',
  styleUrl: './day-book.component.css'
})
export class DayBookComponent {

  
  Transaction: any;


transactions: { name: string; refNo: string; type: string; total: number; moneyIn: number; moneyOut: number;  }[] = [
  {
      name: 'Vendor A',
      refNo: 'INV-001',
      type: 'Purchase',
      total: 1000,
      moneyIn: 0,
      moneyOut: 1000
    },
    {
      name: 'Vendor B',
      refNo: 'INV-002',
      type: 'Refund',
      total: 500,
      moneyIn: 500,
      moneyOut: 0
    }
];

  
 selectedDate = new Date().toISOString().substring(0, 10);
  selectedFirm = 'ALL FIRMS';
  firms = ['ALL FIRMS', 'Firm A', 'Firm B'];
  searchTerm = '';


  get filteredTransactions() {
    return this.transactions.filter(tx =>
      !this.searchTerm ||
      Object.values(tx).some(val =>
        val?.toString().toLowerCase().includes(this.searchTerm.toLowerCase())
      )
    );
  }
}
