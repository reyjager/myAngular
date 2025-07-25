import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="header">
      <div class="logo">My Angular App</div>
      <nav class="nav-menu">
        <ul>
          <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a></li>
          <li><a routerLink="/about" routerLinkActive="active">About</a></li>
          <li><a routerLink="/services" routerLinkActive="active">Services</a></li>
          <li><a routerLink="/contact" routerLinkActive="active">Contact</a></li>
        </ul>
      </nav>
    </header>
  `,
  styles: [`
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
      background-color: #3f51b5;
      color: white;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }

    .logo {
      font-size: 1.5rem;
      font-weight: bold;
    }

    .nav-menu ul {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .nav-menu li {
      margin-left: 1.5rem;
    }

    .nav-menu a {
      color: white;
      text-decoration: none;
      transition: opacity 0.2s;
    }

    .nav-menu a:hover {
      opacity: 0.8;
    }

    .nav-menu a.active {
      font-weight: bold;
      text-decoration: underline;
    }
  `]
})
export class HeaderComponent {}
