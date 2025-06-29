import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass } from '@angular/common';

interface MenuItem {
  name: string;
  path?: string;
  icon?: string;
  submenu?: MenuItem[];
  id?: string;
}

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
          <li><a routerLink="/dashboard" routerLinkActive="active"><i class="material-icons">dashboard</i> Dashboard</a></li>

          <li>
            <a (click)="toggleSubmenu('projects')" [ngClass]="{'has-submenu': true, 'expanded': expandedMenus.projects}">
              <div><i class="material-icons">folder</i> Projects</div>
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
              <div><i class="material-icons">bar_chart</i> Reports</div>
              <span class="arrow">{{ expandedMenus.reports ? '▼' : '▶' }}</span>
            </a>
            <ul class="submenu" [ngClass]="{'expanded': expandedMenus.reports}">
              <li><a routerLink="/reports" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">All Reports</a></li>
              <li><a routerLink="/reports/report1" routerLinkActive="active">Report 1</a></li>
              <li><a routerLink="/reports/report2" routerLinkActive="active">Report 2</a></li>
              <li><a routerLink="/reports/report3" routerLinkActive="active">Report 3</a></li>
            </ul>
          </li>

          <li><a routerLink="/settings" routerLinkActive="active"><i class="material-icons">settings</i> Settings</a></li>
          <li><a routerLink="/profile" routerLinkActive="active"><i class="material-icons">person</i> Profile</a></li>
          <li><a routerLink="/help" routerLinkActive="active"><i class="material-icons">help</i> Help</a></li>
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
      margin: 0.5rem;
      border-radius: 8px;
      overflow: hidden;
      box-sizing: border-box;
      max-width: calc(100% - 1rem);
    }

    .sidebar-header {
      padding: 1rem;
      margin: 0.5rem;
      border-bottom: 1px solid #e0e0e0;
      box-sizing: border-box;
    }

    .sidebar-header h3 {
      margin: 0;
      font-size: 1.2rem;
      color: #333;
    }

    .sidebar-nav ul {
      list-style: none;
      padding: 0;
      margin: 0.5rem;
      box-sizing: border-box;
    }

    .sidebar-nav li {
      margin-bottom: 0.5rem;
    }

    .sidebar-nav a {
      display: flex;
      align-items: center;
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
      width: 100%;
    }

    .arrow {
      font-size: 0.8rem;
      margin-left: auto;
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

    .material-icons {
      font-size: 18px;
      margin-right: 8px;
    }
  `]
})
export class SidebarComponent {
  expandedMenus = {
    projects: false,
    reports: false
  };

  menuItems: MenuItem[] = [
    {
      name: 'Dashboard',
      path: '/dashboard',
      icon: 'dashboard'
    },
    {
      name: 'Projects',
      path: '/projects',
      id: 'projects',
      icon: 'folder',
      submenu: [
        { name: 'All Projects', path: '/projects', icon: 'list' },
        { name: 'Project 1', path: '/projects/project1' },
        { name: 'Project 2', path: '/projects/project2'},
        { name: 'Project 3', path: '/projects/project3'}
      ]
    },
    {
      name: 'Reports',
      path: '/reports',
      id: 'reports',
      icon: 'bar_chart',
      submenu: [
        { name: 'All Reports', path: '/reports', icon: 'list' },
        { name: 'Report 1', path: '/reports/report1' },
        { name: 'Report 2', path: '/reports/report2'},
        { name: 'Report 3', path: '/reports/report3'}
      ]
    },
    {
      name: 'Settings',
      path: '/settings',
      icon: 'settings'
    },
    {
      name: 'Profile',
      path: '/profile',
      icon: 'person'
    },
    {
      name: 'Help',
      path: '/help',
      icon: 'help'
    }
  ];

  toggleSubmenu(menu: string) {
    // Check if the clicked menu was already open
    const wasOpen = this.expandedMenus[menu as keyof typeof this.expandedMenus];

    // Close all menus
    Object.keys(this.expandedMenus).forEach(key => {
      this.expandedMenus[key as keyof typeof this.expandedMenus] = false;
    });

    // Only open the menu if it wasn't already open
    if (menu !== 'all' && !wasOpen) {
      this.expandedMenus[menu as keyof typeof this.expandedMenus] = true;
    }
  }
}
