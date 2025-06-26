import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <main class="main-content">
      <div class="container-sm">
        <router-outlet></router-outlet>
      </div>
    </main>
  `,
  styles: [
    `
      .main-content {
        flex: 1;
        padding: 1.5rem;
        height: calc(100vh - 20px);
        width: calc(100% - 400px);
        overflow-y: auto;
        overflow-x: auto;
        margin: 10px;
      }


    `,
  ],
})
export class MainContentComponent {}
