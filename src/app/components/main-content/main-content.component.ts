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
  styles: [`
    .main-content {
      flex: 1;
      padding: 1.5rem;
      overflow-y: auto;
    }
  `]
})
export class MainContentComponent {}