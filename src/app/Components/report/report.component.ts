import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [TableModule],
  templateUrl: './report.component.html',
  styleUrl: './report.component.css'
})
export class ReportComponent {
  transactions: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {

    this.transactions = [
      { date: '29/03/2025', invoice: 1, partyName: 'Laptop solution', transaction: 'Sale', payment: 'Cash', amount: 1000, balance: 1000 },
      { date: '30/03/2025', invoice: 2, partyName: 'mobail shop', transaction: 'Sale', payment: 'Cash', amount: 0, balance: 0 },
      { date: '30/03/2025', invoice: 3, partyName: 'ram patil', transaction: 'Sale', payment: 'Cash', amount: 0, balance: 0 },
      { date: '30/03/2025', invoice: 4, partyName: 'Laptop solution', transaction: 'Sale', payment: 'Cash', amount: 0, balance: 0 },
    ];
  }
}
