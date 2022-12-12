import { Injectable } from '@angular/core';
import { graphql } from 'graphql';
import { buildSchema } from 'graphql/utilities';
import { AppSettings } from './AppSetting';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { AuthenticationResponse, RegisterInput, User } from './structs';
import { Observable, map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private headers: HttpHeaders;
  public token = ""

  constructor(private httpClient: HttpClient) {
    this.headers = new HttpHeaders();
    //this.headers = this.headers.set('Content-Type', 'application/json; charset=utf-8');
    this.headers = this.headers.set('Authorization', "")
   }

  private setSession(authResult:AuthenticationResponse) {
    //localStorage.setItem('token', authResult.idToken);
    this.token = authResult.token
    this.headers = this.headers.set('Authorization', `Bearer ${authResult.token}`)
    console.log(this.headers.get('Authorization'))
}       

  public login(data:any): Observable<any>{
    return this.httpClient.post<AuthenticationResponse>(AppSettings.API_USERS_URL+"/login", data, { 'headers': this.headers })
    .pipe(map(data => {this.setSession(data); console.log("token:", data); return data}));
    
  }

  public logout(){
    this.setSession({token: ""})
  }

  register(data:any):Observable<any>{
    console.log(data, this.headers)
    return this.httpClient.post<any>(AppSettings.API_USERS_URL+"/register", data)
  }
}
