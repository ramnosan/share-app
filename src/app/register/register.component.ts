import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../auth.service';
import { RegisterInput, User } from '../structs';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public errors={}
  public message=null
  constructor(private authService: AuthService){}
  public onRegister(data:any){
    this.authService.register(data).subscribe(resp => 
      {
        console.log("success:", resp)
        this.message = null
        this.errors={}
      },
      error=>
      {
        this.errors = error["error"]["errors"]
        console.log(error)
        this.message = error["error"]
      })
  }
}
