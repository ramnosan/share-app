import { Component } from '@angular/core';
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

  onClick(){
    this.graphqlService.login().subscribe(a => {console.log(a); this.users=a["data"]; console.log(this.users)});
  }

  onLogin(data:any){
    this.authService.login(data)
  }
}
