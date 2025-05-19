import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-setting',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.css'
})
export class SettingComponent {

  isGeneralClicked: boolean = true;
  isTransactionClicked: boolean = false;
  isPrintClicked: boolean = false;
  isPartyClicked: boolean = false
  isItemClicked: boolean = false


  onTransactionClick() {
    this.isTransactionClicked = true;
    this.isPrintClicked = false;
    this.isGeneralClicked = false;
    this.isPartyClicked = false
    this.isItemClicked = false
  }

  onPrintClick() {
    this.isTransactionClicked = false;
    this.isPrintClicked = true;
    this.isGeneralClicked = false;
    this.isPartyClicked = false
    this.isItemClicked = false
  }

  onGeneralClick() {
    this.isTransactionClicked = false;
    this.isPrintClicked = false;
    this.isGeneralClicked = true;
    this.isPartyClicked = false
    this.isItemClicked = false
  }

  // Div 2

  firm = 'LAPTOP HUB';

  transactionHeader = [
    { label: 'Invoice/Bill No.', checked: true },
    { label: 'Add Time on Transactions', checked: true },
    { label: 'Print Time on Invoices', checked: false },
    { label: 'Cash Sale by default', checked: false },
    { label: 'Billing Name of Parties', checked: false },
    { label: 'Customers P.O. Details on Transactions', checked: false }
  ];

  itemsTable = [
    { label: 'Inclusive/Exclusive Tax on Rate(Price/Unit)', checked: true },
    { label: 'Display Purchase Price of Items', checked: true },
    { label: 'Show last 5 Sale Price of Items', checked: false },
    { label: 'Free Item Quantity', checked: false },
    { label: 'Count', checked: false }
  ];

  taxesDiscounts = [
    { label: 'Transaction wise Tax', checked: false },
    { label: 'Transaction wise Discount', checked: false },
    { label: 'Round Off Total', checked: true }
  ];

  nearestOptions = ['Nearest'];
  roundToOptions = ['1', '0.5', '0.1'];
  roundNearest = 'Nearest';
  roundTo = '1';

  moreFeatures = [
    { label: 'E-way bill no', checked: false },
    { label: 'Quick Entry', checked: false },
    { label: 'Do not Show Invoice Preview', checked: false },
    { label: 'Enable Passcode for transaction edit/delete', checked: false },
    { label: 'Discount During Payments', checked: false }
  ];

  transactionPrefixes = [
    { label: 'Sale', value: 'None' },
    { label: 'Credit Note', value: 'None' },
    { label: 'Sale Order', value: 'None' },
    { label: 'Purchase Order', value: 'None' },
    { label: 'Estimate', value: 'None' },
    { label: 'Delivery Challan', value: 'None' }
  ];

  prefixOptions = ['None', 'INV', 'CN', 'SO', 'PO', 'EST', 'DC'];


  // Div 4 

  onPartyClick() {
    this.isTransactionClicked = false;
    this.isPrintClicked = false;
    this.isGeneralClicked = false;
    this.isPartyClicked = true
      this.isItemClicked = false
  }


  onItemClick() {
    this.isTransactionClicked = false;
    this.isPrintClicked = false;
    this.isGeneralClicked = false;
    this.isPartyClicked = false
    this.isItemClicked = true
  }

  // div 4 

   partySettings = [
    { label: 'Party Grouping', checked: false },
    { label: 'Shipping Address', checked: false },
    { label: 'Manage Party Status', checked: false },
    { label: 'Enable Payment Reminder', checked: true },
  ];

  reminderDays: number = 14;

  partyAdditionalFields = [
    { value: '', showInPrint: false, enabled: false, hasDate: false },
    { value: '', showInPrint: false, enabled: false, hasDate: false },
    { value: '', showInPrint: false, enabled: false, hasDate: false },
    { value: '', showInPrint: false, enabled: false, hasDate: true, date: '' },
  ];

  loyaltyPointEnabled = true;



  // Div 5 


  productType = 'product';

  itemSettings = [
    { label: 'Enable Item', checked: true, info: true },
    { label: 'Barcode Scan', checked: false, info: true },
    { label: 'Stock Maintenance', checked: true, info: true },
    { label: 'Manufacturing', checked: false, locked: true },
    { label: 'Show Low Stock Dialog', checked: true, info: true },
    { label: 'Items Unit', checked: true },
    { label: 'Default Unit', checked: false, info: true },
    { label: 'Item Category', checked: true, info: true },
    { label: 'Party Wise Item Rate', checked: false, premium: true }
  ];

  itemAdditionalFields = {
    mrp: { enabled: false },
    serial: { enabled: false },
    batch: {
      enabled: false,
      expEnabled: false,
      mfgEnabled: false,
      modelEnabled: false
    }
  };

  

}
