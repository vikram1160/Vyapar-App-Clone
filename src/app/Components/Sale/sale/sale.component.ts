import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';



@Component({
  selector: 'app-sale',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './sale.component.html',
  styleUrl: './sale.component.css'
})
export class SaleComponent {

  showReports: boolean = false;

  Transaction: any;


transactions: { date: string; invoice: string; partyName: string; transactionType: string; paymentType: string; amount: number; balance: number; }[] = [
  {
    date: '2025-05-10',
    invoice: 'INV1001',
    partyName: 'ABC Traders',
    transactionType: 'Sale',
    paymentType: 'Cash',
    amount: 1200.00,
    balance: 0.00
  },
  {
    date: '2025-05-11',
    invoice: 'INV1002',
    partyName: 'XYZ Ltd.',
    transactionType: 'Purchase',
    paymentType: 'Bank Transfer',
    amount: 2200.00,
    balance: 2200.00
  }
];



openComponent(componentName: string) {
  if (componentName === 'AddSale') {
    this.showReports = false;
  } else if (componentName === 'Reports') {
    this.showReports = true;
  }


}




  
 fromDate = '2025-05-01';
  toDate = '2025-05-31';

  firms = ['All Firms'];
  users = ['All Users'];

  selectedFirm = 'All Firms';
  selectedUser = 'All Users';

  paidAmount = 200.0;
  unpaidAmount = 500.0;

  searchTerm = '';

  // transactions = [];

 constructor(private router:Router){

  }
  navigateToNewComponent() {
    this.router.navigate(['/add-sale']);
  }
}
