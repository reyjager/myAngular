import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HelpComponent } from './pages/help/help.component';
import { Project1Component } from './pages/projects/project1/project1.component';
import { Project2Component } from './pages/projects/project2/project2.component';
import { Project3Component } from './pages/projects/project3/project3.component';
import { Report1Component } from './pages/reports/report1/report1.component';
import { Report2Component } from './pages/reports/report2/report2.component';
import { Report3Component } from './pages/reports/report3/report3.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/project1', component: Project1Component },
  { path: 'projects/project2', component: Project2Component },
  { path: 'projects/project3', component: Project3Component },
  { path: 'reports', component: ReportsComponent },
  { path: 'reports/report1', component: Report1Component },
  { path: 'reports/report2', component: Report2Component },
  { path: 'reports/report3', component: Report3Component },
  { path: 'settings', component: SettingsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'help', component: HelpComponent },
  { path: '**', redirectTo: 'dashboard' }
];