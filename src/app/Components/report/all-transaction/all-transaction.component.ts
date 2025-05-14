import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-all-transaction',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './all-transaction.component.html',
  styleUrl: './all-transaction.component.css'
})
export class AllTransactionComponent {
 fromDate: Date = new Date();
  toDate: Date = new Date();
  selectedFirm: string = 'all';
  selectedUser: string = 'all';
  transactionType: string = 'All Transaction';
  searchText: string = '';

  firms = ['Firm A', 'Firm B'];
  users = ['User A', 'User B'];
  transactions: any[] = []; 
}
