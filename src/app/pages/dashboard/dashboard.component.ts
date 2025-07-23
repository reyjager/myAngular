import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  performanceMetrics = [
    { name: 'Total Users', value: '12,345', unit: '', trend: 'up' },
    { name: 'Revenue', value: '9,876', unit: '$', trend: 'up' },
    { name: 'Conversion Rate', value: '3.45', unit: '%', trend: 'down' },
    { name: 'Avg. Session', value: '4.2', unit: 'min', trend: 'stable' }
  ];
  
  private createLineChart(): void {
    new Chart('lineChart', {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Monthly Users',
            data: [65, 59, 80, 81, 56, 72],
            borderColor: '#4f46e5',
            tension: 0.3,
            fill: true,
            backgroundColor: 'rgba(79, 70, 229, 0.1)',
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
        },
      },
    });
  }

  private createBarChart(): void {
    new Chart('barChart', {
      type: 'bar',
      data: {
        labels: ['Product A', 'Product B', 'Product C', 'Product D'],
        datasets: [
          {
            label: 'Revenue',
            data: [12, 19, 3, 5],
            backgroundColor: [
              'rgba(79, 70, 229, 0.8)',
              'rgba(99, 102, 241, 0.8)',
              'rgba(129, 140, 248, 0.8)',
              'rgba(165, 180, 252, 0.8)',
            ],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
        },
      },
    });
  }

  private createPieChart(): void {
    new Chart('pieChart', {
      type: 'pie',
      data: {
        labels: ['Desktop', 'Mobile', 'Tablet'],
        datasets: [
          {
            data: [300, 500, 200],
            backgroundColor: ['#4f46e5', '#6366f1', '#a5b4fc'],
          },
        ],
      },
      options: {
        responsive: true,
      },
    });
  }

  getTrendIcon(trend: string): string {
    return (
      {
        up: 'arrow_upward',
        down: 'arrow_downward',
        stable: 'remove',
      }[trend] || 'remove'
    );
  }

  getTrendColor(trend: string): string {
    return (
      {
        up: 'text-green-500',
        down: 'text-red-500',
        stable: 'text-gray-500',
      }[trend] || 'text-gray-500'
    );
  }
  
  ngOnInit(): void {
    setTimeout(() => {
      this.createLineChart();
      this.createBarChart();
      this.createPieChart();
    }, 100);
  }
}
