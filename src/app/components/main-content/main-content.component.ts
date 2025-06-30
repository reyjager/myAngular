import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <main class="main-content">
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [
    `
      .main-content {
        width: 100%;
        height: 100%;
        overflow-y: auto;
        box-sizing: border-box;
        max-width: calc(100% - 2rem);
        background-color: white;
        border-radius: 8px;
      }
      .card {
        background-color: #f1f3f4;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        padding: 2rem;
        width: 100%;
        margin: 1.5rem 0;
        box-sizing: border-box;
        max-width: 100%;
        overflow: hidden;
      }
    `,
  ],
})
export class MainContentComponent {}
