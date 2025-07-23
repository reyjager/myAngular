import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { User, AuthResponse } from '../models/user.model';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: User | null = null;

  constructor(
    private apiService: ApiService,
    private router: Router
  ) {}

  register(userData: User): Observable<AuthResponse> {
    return this.apiService.post<AuthResponse>('register', userData).pipe(
      tap(response => {
        if (response.user) {
          this.currentUser = response.user;
          localStorage.setItem('user', JSON.stringify(response.user));
          if (response.token) {
            localStorage.setItem('token', response.token);
          }
        }
      })
    );
  }

  logout(): void {
    this.currentUser = null;
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!this.currentUser || !!localStorage.getItem('user');
  }

  getCurrentUser(): User | null {
    if (this.currentUser) {
      return this.currentUser;
    }
    
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.currentUser = JSON.parse(storedUser);
      return this.currentUser;
    }
    
    return null;
  }
}