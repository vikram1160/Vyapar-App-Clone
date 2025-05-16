import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';

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
    console.log('Expand all clicked'); 
  }

 downloadPDF() {
  const doc = new jsPDF();

  // Add Title
  doc.setFontSize(16);
  doc.text('Trial Balance Report', 14, 15);

  // Optional: Add Date Range
  doc.setFontSize(10);
  doc.text('Period: 01-04-2025 to 14-05-2025', 14, 22);

  // Table headers and data
  autoTable(doc, {
    startY: 30,
    head: [
      ['ACCOUNT', 'OPENING BALANCE', 'DEBIT', 'CREDIT', 'CLOSING BALANCE']
    ],
    body: [
      [{ content: 'Assets', colSpan: 5, styles: { halign: 'left', fillColor: [220, 220, 220] } }],
      ['  Fixed Assets', '0 Dr.', '0', '0', '0 Dr.'],
      ['  Non Current Assets', '0 Dr.', '0', '0', '0 Dr.'],
      ['  Current Assets', '920194.1 Dr.', '38822', '11600', '947416.1 Dr.'],
      ['    Sundry Debtors', '2196 Dr.', '26822', '200', '28818 Dr.'],
      ['    Input Duties & Taxes', '0 Dr.', '0', '0', '0 Dr.'],
      ['    Bank Accounts', '0 Dr.', '0', '0', '0 Dr.'],
      ['    Cash Accounts', '908999 Dr.', '0', '11400', '897599 Dr.']
    ],
    styles: {
      halign: 'center',
      valign: 'middle',
      fontSize: 10
    },
    columnStyles: {
      0: { halign: 'left' } // left align first column
    }
  });

  // Save the file
  doc.save('trial-balance-report.pdf');
}

downloadXLS(): void {
  const tableElement = document.querySelector('table'); // You can use ID too: document.getElementById('yourTableId')
  if (!tableElement) return;

  const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(tableElement);
  const workbook: XLSX.WorkBook = {
    Sheets: { 'Trial Balance': worksheet },
    SheetNames: ['Trial Balance']
  };

  const excelBuffer: any = XLSX.write(workbook, {
    bookType: 'xlsx',
    type: 'array'
  });

  const data: Blob = new Blob([excelBuffer], {
    type: 'application/octet-stream'
  });

  FileSaver.saveAs(data, 'trial-balance-report.xlsx');
}

}
