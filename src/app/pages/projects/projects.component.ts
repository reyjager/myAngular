import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  template: `
    <div class="content-header">
      <h1>Projects</h1>
    </div>
    <div class="content-body">
      <div class="card">
        <h2>Project List</h2>
        <p>This is where you can manage your projects.</p>
      </div>
    </div>
  `,
  styles: [
    `
      .content-header {
        margin: 2rem 1rem;
        padding: 1rem;
        box-sizing: border-box;
        background-color: #e3f2fd;
        border-radius: 8px;
      }
      .content-header {
        gap: 2rem;
        padding: 10px;
      }
      .content-body {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 2rem;
        margin: 2rem 1rem;
        padding: 1rem;
        box-sizing: border-box;
        overflow: hidden;
        background-color: #f5f5f5;
        border-radius: 8px;
      }

      .card {
        background-color: white;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        padding: 2rem;
        margin: 1rem;
        box-sizing: border-box;
        max-width: 100%;
        overflow: hidden;
      }
    `,
  ],
})
export class ProjectsComponent {}
