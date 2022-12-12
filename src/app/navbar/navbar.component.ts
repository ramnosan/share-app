import { Component } from '@angular/core';
import { AppSettings } from '../AppSetting';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private authService: AuthService){
  }

  logout(){
    this.authService.logout()
  }

  isLoggedIn(){
    if(this.authService.token!=""){
      return true
    }
    else return false
  }
}
