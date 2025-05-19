import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cash-in-hand',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './cash-in-hand.component.html',
  styleUrl: './cash-in-hand.component.css'
})
export class CashInHandComponent {
transactions = [
  { type: 'Payment-Out', name: 'mobails', date: new Date('2025-04-03T22:17:00'), amount: -400 },
  { type: 'Payment-Out', name: 'mob', date: new Date('2025-04-03T22:01:00'), amount: -11000 },
  { type: 'Purchase', name: 'vikram', date: new Date('2025-03-30T13:35:00'), amount: -5 },
  { type: 'Payment-In', name: 'Laptop solution', date: new Date('2025-03-30T13:13:00'), amount: 4 },
  { type: 'Opening Loan', name: 'vikram patil', date: new Date('2025-03-30'), amount: 999000 },
  { type: 'Cash Reduce', name: 'y7uh', date: new Date('2025-03-30'), amount: -90000 }
];

selectedTxn: any = null;

getDotColor(type: string): string {
  switch (type) {
    case 'Payment-In': return 'green';
    case 'Payment-Out': return 'orange';
    case 'Purchase': return 'red';
    case 'Opening Loan': return 'green';
    case 'Cash Reduce': return 'olive';
    default: return '#999';
  }
}

}
