import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-setting',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.css'
})
export class SettingComponent {
 
isGeneralClicked: boolean = true;
isTransactionClicked: boolean = false;
isPrintClicked: boolean = false;


onTransactionClick() {
  this.isTransactionClicked = true;
  this.isPrintClicked = false;
  this.isGeneralClicked = false;
}

onPrintClick() {
  this.isTransactionClicked = false;
  this.isPrintClicked = true;
  this.isGeneralClicked = false;
}

onGeneralClick() {
  this.isTransactionClicked = false;
  this.isPrintClicked = false;
  this.isGeneralClicked = true;
}


}
