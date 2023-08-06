import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CrudHttpService {

    headers = new HttpHeaders().set('Content-Type', 'application/json');

    constructor(private http: HttpClient) { }

    // Create
    post(API_URL: string, data: any): Observable<any> {
        return this.http.post(API_URL, data).pipe(
                catchError(this.handleError)
            );
    }

    /* getTest(url:string) {
        return this.http.get(url)
    } */

    // Read
    get(API_URL: string): Observable<any> {
        return this.http.get(`${API_URL}`).pipe(
            catchError(this.handleError)
        );
    }

    // Update
    update(API_URL: string, data: any): Observable<any> {                      
        return this.http.put(API_URL, data, { headers: this.headers }).pipe(
            catchError(this.handleError)
        );
    }

    // Delete
    delete(API_URL: string): Observable<any> {
        return this.http.delete(API_URL).pipe(
            catchError(this.handleError)
        );
    }

    // Handle API errors
    handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        } else {
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        return throwError(() => new Error(
            'Something bad happened; please try again later.'));
    };
}
