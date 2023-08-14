/*import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service'; // Príkladný názov pre službu autentifikácie
import { FormControl, FormGroup } from '@angular/forms';
import { HabitService } from './habit.service'; // Príkladný názov pre službu na správu zvykov

@Injectable({
    providedIn: 'root',
  })
  export class AuthAndHabitGuard implements CanActivate {
    constructor(
      private authService: AuthService,
      private router: Router,
      private habitService: HabitService
    ) {}
  
    canActivate(): boolean {
      if (!this.authService.isLoggedIn()) {
        this.router.navigate(['/login']);
        return false;
      }
  
      const user: User = {
        username: this.form.get('username')?.value,
        password: this.form.get('password')?.value,
      };
  
      this.loading = true;
      this.errorMessage = '';
  
      this.habitService.login(user).subscribe(
        (response) => {
          console.log('Login successful');
          this.habitService.getHabits().subscribe(
            (response) => {
              console.log('Habits received');
              this.habits = response;
            },
            (error) => {
              console.error('Failed to get habits');
              this.errorMessage = error;
              this.loading = false;
            },
            () => {
              console.log('Get habits completed');
              this.loading = false;
            }
          );
        },
        (error) => {
          console.error('Login failed');
          this.loading = false;
        }
      );
  
      return true;
    }
  }*/