import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ElectricPowerDataService {

  reqStringStromerzeugung="https://www.marktstammdatenregister.de/MaStR/Einheit/EinheitJson/GetFilterColumnsErweiterteOeffentlicheEinheitStromerzeugung)"
  stromerzeugung: {}
  constructor(private httpClient: HttpClient) {
    this.stromerzeugung={"a":"b"}
   }

  public testFunc(){
    this.httpClient.get(this.reqStringStromerzeugung).subscribe(data => console.log(data))
  }
}
