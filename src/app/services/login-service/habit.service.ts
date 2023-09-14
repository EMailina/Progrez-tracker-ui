import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, zip } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Habit } from '../habit';
import { ApiURIs } from '../api-resource-constants';
import { CrudHttpService } from '../crud-http.service';
import { User } from '../user';


@Injectable({
    providedIn: 'root'
})
export class HabitService {

baseURL: string = "https://tracker-progrez.onrender.com";
    corsHeaders: HttpHeaders = new HttpHeaders;

    constructor(private http: HttpClient) { }

    // getAllBooks$(): Observable<Book[]> {
    //     return this.crudHttpService.get(ApiURIs.BOOKS);
    // }
    // Http Options

    // public myFunc(): void {

    //     let http: HttpClient;
    
    //     http.get(
    //       'https://www.example.com/mypage',
    //       {
    //         headers:
    //           new HttpHeaders(
    //             {
    //               'Content-Type': 'application/json',
    //               'X-Requested-With': 'XMLHttpRequest',
    //               'MyClientCert': '',        // This is empty
    //               'MyToken': ''              // This is empty
    //             }
    //           )
    //       }
    //     ).pipe( map(res => res), catchError(err => throwError(err)) );
    //   }
    
    getHabitById(): Observable<any> {
        var z = this.http.get(this.baseURL + "/api/v0"+ ApiURIs.GET_HABITS_BY_ID);
        return z;
    }

    getHabits(): Observable<any> {

        var headers = {
            'X-Requested-With': 'XMLHttpRequest',
            'Sec-Fetch-Site': 'cross-site','Sec-Fetch-Mode':'cors'
          };
        var z = this.http.get(this.baseURL + "/api/v0"+ ApiURIs.GET_HABITS,  {
            headers: new HttpHeaders(headers),
           
            withCredentials: true,
            
          });
        return z;
    }

    login(body: User): Observable<any> {
        const payload = new HttpParams()
        .set('username', body.username)
        .set('password', body.password);
        
var headers = {
    'X-Requested-With': 'XMLHttpRequest',
    'Accept': 'application/json', 
    'Sec-Fetch-Site': 'cross-site',
    'Sec-Fetch-Mode':'cors'
  };
  
  var options = {
    headers: new HttpHeaders(headers),
    observe: 'response',
    responseType: 'text',
    withCredentials: true,
  };
  
  var z = this.http.post(this.baseURL + ApiURIs.POST_LOGIN,payload, {
    headers: new HttpHeaders(headers),
    observe: 'response',
    responseType: 'text',
    withCredentials: true,
  });
  
    // var z = this.http.post(this.baseURL + ApiURIs.POST_LOGIN, payload, {observe:"response", responseType: 'text', withCredentials: true});
        return z;
    }
}


 