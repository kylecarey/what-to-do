import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConnectableObservable, Observable, of } from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

export class User {
  name: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})


export class UserCrudService {
  endpoint = 'http://localhost:5000/api';

  httpOptions = {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  constructor(private httpClient: HttpClient) { }

  createUser(user: User) {
    return this.httpClient.post<User>(this.endpoint + '/create-user', JSON.stringify(user), this.httpOptions)
    .pipe(
      catchError(this.handleError<User>('error occured'))
    );
  }

  login(user: User) {
    return this.httpClient.post<User>(this.endpoint + '/login', JSON.stringify(user), this.httpOptions)
    .pipe(
      catchError(this.handleError<User>('error occured logging in'))
    );
  };


  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
