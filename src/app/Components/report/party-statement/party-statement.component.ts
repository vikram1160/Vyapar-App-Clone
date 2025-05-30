import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-party-statement',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './party-statement.component.html',
  styleUrl: './party-statement.component.css'
})
export class PartyStatementComponent {
 fromDate: string = '2025-05-01';
  toDate: string = '2025-05-31';
  transactions: any[] = []; // Currently empty
}
