import { Component } from '@angular/core';
import { EntgeldatlasService } from '../entgeldatlas.service';

@Component({
  selector: 'app-entgeldatlas',
  templateUrl: './entgeldatlas.component.html',
  styleUrls: ['./entgeldatlas.component.css']
})
export class EntgeldatlasComponent {
  constructor(private entgeldService: EntgeldatlasService){}

  test(){
    this.entgeldService.getAuthToken()
  }
}
