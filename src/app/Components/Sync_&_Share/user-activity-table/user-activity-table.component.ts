import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-activity-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-activity-table.component.html',
  styleUrl: './user-activity-table.component.css'
})
export class UserActivityTableComponent {
  activities = [
    {
      name: 'Admin',
      dateTime: '03 Apr, 25 10:01 PM',
      role: 'Primary Admin',
      action: 'CREATED PAYMENT-…',
      details: 'Receipt Number:'
    },
    {
      name: 'Admin',
      dateTime: '03 Apr, 25 09:59 PM',
      role: 'Primary Admin',
      action: 'CREATED PAYMENT-IN',
      details: 'Receipt Number: 2'
    },
    {
      name: 'Admin',
      dateTime: '03 Apr, 25 09:57 PM',
      role: 'Primary Admin',
      action: 'CREATED SALE',
      details: 'Invoice Number: 7'
    },
    {
      name: 'Admin',
      dateTime: '03 Apr, 25 09:57 PM',
      role: 'Primary Admin',
      action: 'CREATED ITEM',
      details: 'Item Name: laptop hub'
    },
    {
      name: 'Admin',
      dateTime: '03 Apr, 25 09:57 PM',
      role: 'Primary Admin',
      action: 'CREATED PARTY',
      details: 'Party Name: mob'
    }
  ];
}
