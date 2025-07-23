import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UserComponent implements OnInit {
  users: User[] = [];
  loading = false;
  error: string | null = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }
  
  echoUsers(): void {
    console.log('All Users:', this.users);
    // Also display in alert for immediate visibility
    alert('Users logged to console. Check browser developer tools.');
  }

  deleteUser(id: number): void {
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(id).subscribe({
        next: () => {
          this.users = this.users.filter(user => user.user_id !== id);
        },
        error: (err) => {
          console.error('Error deleting user:', err);
          alert('Failed to delete user. Please try again.');
        }
      });
    }
  }

  loadUsers(): void {
    this.loading = true;
    this.error = null;

    this.userService.getAllUsers().subscribe({
      next: (response: any) => {
        // Handle the response based on your API structure
        // If the API returns data directly as an array
        if (Array.isArray(response)) {
          this.users = response;
        }
        // If the API returns data in a wrapper object with a data property
        else if (response && response.data) {
          this.users = response.data;
        }
        // If the API returns data in some other format
        else {
          this.users = [];
          console.warn('Unexpected API response format:', response);
        }
        this.loading = false;
        this.echoUsers(); // Echo users after loading
      },
      error: (err) => {
        this.error = 'Failed to load users. Please try again.';
        this.loading = false;
        console.error('Error loading users:', err);
      }
    });
  }
}
