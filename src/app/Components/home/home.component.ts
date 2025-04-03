import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart'
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ChartModule,FormsModule,DropdownModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  data: any;
  options: any;

  constructor() {
    this.data = {
      labels: ['1 Mar', '4 Mar', '7 Mar', '10 Mar', '13 Mar', '16 Mar', '19 Mar', '22 Mar', '25 Mar', '28 Mar', '29 Mar', '31 Mar'],
      datasets: [
        {
          label: 'Revenue',
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1000, 0],
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
              return `₹ ${tooltipItem.raw}`;
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



  ngOnInit(): void {
    this.loadPage();
  }

  loadPage(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
