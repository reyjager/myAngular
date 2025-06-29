import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <header class="header">
      <div class="logo">My Angular App</div>
      <nav class="nav-menu">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  `,
  styles: [`
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      margin: 0.5rem;
      background-color: #3f51b5;
      color: white;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      overflow: hidden;
      box-sizing: border-box;
      max-width: calc(100% - 1rem);
    }
    
    .logo {
      font-size: 1.5rem;
      font-weight: bold;
      margin-right: 1rem;
    }
    
    .nav-menu ul {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
      overflow: hidden;
    }
    
    .nav-menu li {
      margin-left: 1rem;
    }
    
    .nav-menu a {
      color: white;
      text-decoration: none;
      transition: opacity 0.2s;
      white-space: nowrap;
    }
    
    .nav-menu a:hover {
      opacity: 0.8;
    }
  `]
})
export class HeaderComponent {}