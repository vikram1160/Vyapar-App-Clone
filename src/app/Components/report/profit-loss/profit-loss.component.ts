import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { TabViewModule } from 'primeng/tabview';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-profit-loss',
  standalone: true,
  imports: [FormsModule, CalendarModule,CommonModule,TabViewModule, AccordionModule],
  templateUrl: './profit-loss.component.html',
  styleUrl: './profit-loss.component.css'
})
export class ProfitLossComponent {
 fromDate: Date = new Date();
  toDate: Date = new Date();


   viewType: string = 'vyapar';

  onTabChange(event: any) {
    this.viewType = event.index === 0 ? 'vyapar' : 'accounting';
  }

  reportData = [
    { label: 'Sale (+)', amount: 0 },
    { label: 'Credit Note (-)', amount: 0 },
    { label: 'Sale FA (+)', amount: 0 },
    { label: 'Purchase (-)', amount: 0 },
    { label: 'Debit Note (+)', amount: 0 },
    { label: 'Purchase FA (-)', amount: 0 },
    { label: 'Direct Expenses(-)', amount: 0 },
    { label: 'Other Direct Expenses (-)', amount: 0, isSubItem: true },
    { label: 'Payment-in Discount (-)', amount: 0, isSubItem: true },
    { label: 'Tax Payable (-)', amount: 0 },
    { label: 'GST Payable (-)', amount: 0, isSubItem: true }
  ];
}
