import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  standalone: true,
  template: `
    <div class="content-header">
      <h1>Settings</h1>
    </div>
    <div class="content-body">
      <div class="card">
        <h2>Application Settings</h2>
        <p>Configure your application settings here.</p>
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
export class SettingsComponent {}