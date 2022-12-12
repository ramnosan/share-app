import { Component } from '@angular/core';
import { subscribe } from 'graphql';
import { AuthService } from '../auth.service';
import { GraphqlService } from '../graphql.service';
import { User } from '../structs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor(private graphqlService: GraphqlService, private authService: AuthService){}
  private users: Array<User> = [];
  public error = null
  public status = null
  public isFetching=false
  onLogin(data:any){
    this.isFetching=true
    this.authService.login(data).subscribe(
      ()=>{this.status=null; setTimeout(()=>{this.isFetching=false}, 250)},
      err=>{
        this.status = err.status;
        var intervalID = setTimeout(()=>{this.isFetching=false}, 250)
        console.log(err)
      }
    )
    
  }
}
