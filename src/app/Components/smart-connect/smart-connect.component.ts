import { Component } from '@angular/core';

@Component({
  selector: 'app-smart-connect',
  standalone: true,
  imports: [],
  templateUrl: './smart-connect.component.html',
  styleUrl: './smart-connect.component.css'
})
export class SmartConnectComponent {

  whatsappMessage: string = 'https://wa.me/917887589262?text=I want to hire you';


  openWhatsApp() {
    window.open(this.whatsappMessage, '_blank');
  }
  
}
