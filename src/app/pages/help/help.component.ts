import { Component } from '@angular/core';

@Component({
  selector: 'app-help',
  standalone: true,
  template: `
    <div class="content-header">
      <h1>Help</h1>
    </div>
    <div class="content-body">
      <div class="card">
        <h2>Support</h2>
        <p>Find help and support resources here.</p>
      </div>
    </div>
  `,
  styles: [`
    .content-body {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1.5rem;
    }
    
    .card {
      background-color: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      padding: 1.5rem;
    }
  `]
})
export class HelpComponent {}