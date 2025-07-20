import { Component } from '@angular/core';

@Component({
  selector: 'app-project3',
  standalone: true,
  template: `
    <div class="content-header">
      <h1>Project 3</h1>
    </div>
    <div class="content-body">
      <div class="card">
        <h2>Project 3 Details</h2>
        <p>This is the Project 3 page.</p>
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
        margin: 2rem 1rem;
        padding: 1rem;
        box-sizing: border-box;
        background-color: #e3f2fd;
        border-radius: 8px;
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
export class Project3Component {}
