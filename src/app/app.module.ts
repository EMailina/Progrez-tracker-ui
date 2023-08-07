import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { NgModule } from '@angular/core';


import { NavbarComponent } from './navbar/navbar.component';
import { HabitHomeComponent } from './habit-home/habit-home.component';
import { LogInComponent } from './log-in/log-in.component';
import { MatInputModule } from '@angular/material/input';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './services/interceptor';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HabitHomeComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,

    MatInputModule,
    MatButtonModule,
    BrowserModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
