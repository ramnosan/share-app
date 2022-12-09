import { Injectable } from '@angular/core';
import { graphql } from 'graphql';
import { buildSchema } from 'graphql/utilities';
import { AppSettings } from './AppSetting';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AuthenticationResponse } from './structs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private headers: HttpHeaders;

  constructor(private httpClient: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers = this.headers.set('Content-Type', 'application/json; charset=utf-8');
    this.headers = this.headers.set('Authorization', "")
   }

  private buildSchema(){
    var schema = buildSchema(AppSettings.SCHEMA_STRING);
    var rootValue = { hello: () => 'Hello world!' };
  }

  private setSession(authResult:any) {
    localStorage.setItem('token', authResult.idToken);
    this.headers = this.headers.set('Authorization', `Bearer ${authResult.token}`)
    console.log(this.headers.get('Authorization'))
}       

  public login(data:any){
    console.log("login_data", data);
    
    return this.httpClient.post<Observable<AuthenticationResponse>>(AppSettings.API_URL+"/login", data, { 'headers': this.headers })
    .subscribe(data => {this.setSession(data); console.log("token", data)});
    
  }

  public logout(){
    this.httpClient.get<any>(AppSettings.API_URL+"/logout", { 'headers': this.headers }).subscribe()
    console.log(this.headers)
    this.headers = this.headers.set("Authorization", "")
    console.log(this.headers)
  }

  register(data:any){
    console.log(data)
    return this.httpClient.post<any>(AppSettings.API_URL+"/register", data)
  }
}
