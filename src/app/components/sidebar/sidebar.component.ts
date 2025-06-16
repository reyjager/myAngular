import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgClass],
  template: `
    <aside class="sidebar">
      <div class="sidebar-header">
        <h3>Menu</h3>
      </div>
      <nav class="sidebar-nav">
        <ul>
          <li><a routerLink="/dashboard" routerLinkActive="active">Dashboard</a></li>
          
          <li>
            <a (click)="toggleSubmenu('projects')" [ngClass]="{'has-submenu': true, 'expanded': expandedMenus.projects}">
              Projects
              <span class="arrow">{{ expandedMenus.projects ? '▼' : '▶' }}</span>
            </a>
            <ul class="submenu" [ngClass]="{'expanded': expandedMenus.projects}">
              <li><a routerLink="/projects" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">All Projects</a></li>
              <li><a routerLink="/projects/project1" routerLinkActive="active">Project 1</a></li>
              <li><a routerLink="/projects/project2" routerLinkActive="active">Project 2</a></li>
              <li><a routerLink="/projects/project3" routerLinkActive="active">Project 3</a></li>
            </ul>
          </li>
          
          <li>
            <a (click)="toggleSubmenu('reports')" [ngClass]="{'has-submenu': true, 'expanded': expandedMenus.reports}">
              Reports
              <span class="arrow">{{ expandedMenus.reports ? '▼' : '▶' }}</span>
            </a>
            <ul class="submenu" [ngClass]="{'expanded': expandedMenus.reports}">
              <li><a routerLink="/reports" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">All Reports</a></li>
              <li><a routerLink="/reports/report1" routerLinkActive="active">Report 1</a></li>
              <li><a routerLink="/reports/report2" routerLinkActive="active">Report 2</a></li>
              <li><a routerLink="/reports/report3" routerLinkActive="active">Report 3</a></li>
            </ul>
          </li>
          
          <li><a routerLink="/settings" routerLinkActive="active">Settings</a></li>
          <li><a routerLink="/profile" routerLinkActive="active">Profile</a></li>
          <li><a routerLink="/help" routerLinkActive="active">Help</a></li>
        </ul>
      </nav>
    </aside>
  `,
  styles: [`
    .sidebar {
      width: 250px;
      height: 100%;
      background-color: #f5f5f5;
      border-right: 1px solid #e0e0e0;
      padding: 1rem 0;
    }
    
    .sidebar-header {
      padding: 0 1.5rem 1rem;
      border-bottom: 1px solid #e0e0e0;
    }
    
    .sidebar-header h3 {
      margin: 0;
      font-size: 1.2rem;
      color: #333;
    }
    
    .sidebar-nav ul {
      list-style: none;
      padding: 0;
      margin: 1rem 0;
    }
    
    .sidebar-nav li {
      margin-bottom: 0.5rem;
    }
    
    .sidebar-nav a {
      display: block;
      padding: 0.75rem 1.5rem;
      color: #555;
      text-decoration: none;
      transition: background-color 0.2s, color 0.2s;
      cursor: pointer;
    }
    
    .sidebar-nav a:hover {
      background-color: #e9ecef;
      color: #333;
    }
    
    .sidebar-nav a.active {
      background-color: #3f51b5;
      color: white;
    }
    
    .has-submenu {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .arrow {
      font-size: 0.8rem;
      margin-left: 0.5rem;
    }
    
    .submenu {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease;
      margin: 0 !important;
    }
    
    .submenu.expanded {
      max-height: 200px;
    }
    
    .submenu li a {
      padding-left: 3rem;
      font-size: 0.9rem;
    }
  `]
})
export class SidebarComponent {
  expandedMenus = {
    projects: false,
    reports: false
  };

  toggleSubmenu(menu: string) {
    // Close all menus first
    Object.keys(this.expandedMenus).forEach(key => {
      this.expandedMenus[key as keyof typeof this.expandedMenus] = false;
    });
    
    // Then open the selected menu (unless it was already open, in which case it stays closed)
    if (menu !== 'all') {
      this.expandedMenus[menu as keyof typeof this.expandedMenus] = !this.expandedMenus[menu as keyof typeof this.expandedMenus];
    }
  }
}