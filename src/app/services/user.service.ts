import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private apiService: ApiService) {}

  getAllUsers(): Observable<User[]> {
    return this.apiService.get<User[]>('users');
  }

  getUserById(id: number): Observable<User> {
    return this.apiService.get<User>(`users/${id}`);
  }

  createUser(user: User): Observable<User> {
    return this.apiService.post<User>('users', user);
  }

  updateUser(id: number, user: User): Observable<User> {
    return this.apiService.put<User>(`users/${id}`, user);
  }

  deleteUser(id: number): Observable<any> {
    return this.apiService.delete<any>(`users/${id}`);
  }
}