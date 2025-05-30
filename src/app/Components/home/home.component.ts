import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart'
import { DropdownModule } from 'primeng/dropdown';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ChartModule,FormsModule, CommonModule,DropdownModule,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  data: any;
  options: any;
  formatted: any




  constructor( private router: Router ) {
    const today = new Date();
    const daysToShow = 12;
    const labels: string[] = [];
    const data: number[] = [];
  
    for (let i = daysToShow - 1; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
  
      const formatted = `${date.getDate()} ${date.toLocaleString('default', { month: 'short' })}`;
      labels.push(formatted);
  
      // Replace this with real revenue logic or API call
      data.push(this.getRandomRevenue()); 
    }
  
    this.data = {
      labels: labels,
      datasets: [
        {
          label: 'Revenue',
          data: data,
          borderColor: '#42A5F5',
          backgroundColor: 'rgba(87, 179, 253, 0.2)',
          fill: true,
          pointBackgroundColor: '#42A5F5',
          pointBorderColor: '#fff',
          pointHoverRadius: 6
        }
      ]
    };
  
    this.options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        tooltip: {
          callbacks: {
            label: function (tooltipItem: any) {
              const value = tooltipItem.raw;
              return `₹ ${value.toLocaleString('en-IN')}`; 
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 200
          }
        }
      }
    };
  }
  
  getRandomRevenue(): number {
    return Math.floor(Math.random() * 2000);
  }

  //   showReports = false;
  // showOther = false;

  // goReport() {
  //   this.showReports = true;
  //   this.showOther = true;
   
  // }

 

    goReport(){

     this.router.navigate(['/reports/sale']);

      // this.router.navigate(['/reports/sale', 'go-report']);
    }

    goTransction(){
      this.router.navigate(['reports/all-transactions']);

    }
    goBookDayReport(){
      this.router.navigate(['reports/daybook']); 
    }
    goPartyStatement(){
      this.router.navigate(['reports/party-statement']);
    }
      


    

 


}
