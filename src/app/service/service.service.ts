import { Injectable } from '@angular/core';
import { User } from './Users';
import { catchError, map } from 'rxjs/operators';
import { Observable, ObservableInput, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  // Node/Express API
  REST_API: String = 'http://localhost:8000/api/';

   // Http Header
   httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
   handleError: (err: any, caught: Observable<any>) => ObservableInput<any>;

  constructor(private httpClient: HttpClient) { }

  //Add User
  AddUser(data: User): Observable<any> {
    let API_URL = `${this.REST_API}/add-user`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }

  //Get All User Data
    getAllUsers(){
      return this.httpClient.get(`${this.REST_API}`);
  }

  //get single user data
  getAllUsersData(id:any): Observable<any>{
    let API_URL = `${this.REST_API}/user-profile/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders })
      .pipe(map((res: any) => {
          return res || {}
        }),
        catchError(this.handleError)
      )
  }

  //update the existing user data
  updateUser(id:any, data:any): Observable<any>{
    let API_URL = `${this.REST_API}/update-user/${id}`;
    return this.httpClient.put(API_URL, data, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      )
  }
}

