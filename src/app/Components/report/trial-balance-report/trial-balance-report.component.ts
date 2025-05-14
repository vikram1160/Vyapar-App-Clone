import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-trial-balance-report',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './trial-balance-report.component.html',
  styleUrl: './trial-balance-report.component.css'
})
export class TrialBalanceReportComponent {
  startDate: string = '2025-04-01';
  endDate: string = '2025-05-14';
  showWorking = true;
  showZeroBalances = false;

  expandAll() {
    console.log('Expand all clicked'); // Can be extended for actual logic
  }
}
