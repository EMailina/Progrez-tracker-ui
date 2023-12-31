import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HabitService } from '../services/login-service/habit.service';
import { User } from '../services/user';
import { Router } from '@angular/router';
import { Habit } from '../services/habit';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  loading: boolean = false;
  errorMessage!: string | null;
  cookie: string = "-";
  habits!: Habit[];
  error: boolean = false;

  form: FormGroup = new FormGroup({
    username: new FormControl(""),
    password: new FormControl("")
  });

  constructor(private habitService: HabitService, private router: Router) { }


  ngOnInit() {

  }

  hide = true;

  onSubmit() {
    var user: User = {
      username: this.form.get("username")?.value,
      password: this.form.get("password")?.value,
    }

    this.loading = true;
    this.errorMessage = null;


    this.habitService.login(user).subscribe(
      (response) => {                           //next() callback
        console.log('response received')
        this.router.navigate(['/home']);
      },
      (error) => {                              //error() callback
        console.error('Request failed with error')
        this.errorMessage = error.status;
        error = true;
      },
      () => {                                   //complete() callback
        console.error('Request completed')      //This is actually not needed 
        this.loading = false;

      })
  }
  onLogIn() {
    this.router.navigate(['/login']);
  }

  isError() {
    if (this.errorMessage == '401')
      return true;
    else return false;
  }

  @HostListener('document:keydown.enter')
  onDocumentKeydownEnter() {
    this.onSubmit();
  }
}

