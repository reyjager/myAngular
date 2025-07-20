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
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],


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
