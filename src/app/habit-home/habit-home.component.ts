import { Component, OnInit } from '@angular/core';
import { HabitService } from '../services/login-service/habit.service';
import { Habit } from '../services/habit';

@Component({
  selector: 'app-habit-home',
  templateUrl: './habit-home.component.html',
  styleUrls: ['./habit-home.component.sass']
})
export class HabitHomeComponent implements OnInit {
  habits!: Habit[];
 
  loading: boolean = false;
  errorMessage!: string;


  constructor(private habitService: HabitService) { }

  ngOnInit(): void {
    this.getRepos();
  }

  public getRepos() {
    this.loading = true;
    this.errorMessage = "";
    this.habitService.getHabits()
      .subscribe(
        (response) => {                           //next() callback
          console.log('response received')
          this.habits = response; 
        },
        (error) => {                              //error() callback
          console.error('Request failed with error')
          this.errorMessage = error;
          this.loading = false;
        },
        () => {                                   //complete() callback
          console.error('Request completed')      //This is actually not needed 
          this.loading = false; 
        })

      //   this.habitService.getHabitById()
      // .subscribe(
      //   (response) => {                           //next() callback
      //     console.log('response received')
      //     this.habits = response; 
      //   },
      //   (error) => {                              //error() callback
      //     console.error('Request failed with error')
      //     this.errorMessage = error;
      //     this.loading = false;
      //   },
      //   () => {                                   //complete() callback
      //     console.error('Request completed')      //This is actually not needed 
      //     this.loading = false; 
      //   })

  }
}
