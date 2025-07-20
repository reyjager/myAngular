import { Component } from '@angular/core';

@Component({
  selector: 'app-report2',
  standalone: true,
  template: `
    <div class="content-header">
      <h1>Report 2</h1>
    </div>
    <div class="content-body">
      <div class="card">
        <h2>Report 2 Details</h2>
        <p>This is the Report 2 page.</p>
      </div>
    </div>
  `,
  styles: [
    `
      .content-body {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 1.5rem;
      }
      .content-header {
        gap: 2rem;
        padding: 10px;
      }

      .card {
        background-color: white;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        padding: 1.5rem;
      }
    `,
  ],
})
export class Report2Component {}
