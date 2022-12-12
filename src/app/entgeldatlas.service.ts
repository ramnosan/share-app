import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EntgeldatlasService {

  constructor(private httpClient: HttpClient) { 
    const headers = new HttpHeaders()
  }
  private token=""
  getAuthToken(){
    var body = {
      client_id: "c4f0d292-9d0f-4763-87dd-d3f9e78fb006",
      client_secret: "566c4dd6-942f-4cda-aad6-8d611c577107",
      grant_type: "client_credentials",
    }

    
    var body = {
      client_id: "a59294b2-8825-47d6-a6c0-1486f02cedb4",
      client_secret: "a3c97fc5-6644-4ec5-8234-66098fc71cc4",
      grant_type: "client_credentials",
    }

    //this.httpClient.get("https://web.arbeitsagentur.de/entgeltatlas/").subscribe(x => console.log(x))

    this.httpClient.post("https://rest.arbeitsagentur.de/oauth/gettoken_cc", body).subscribe(data => console.log(data))
    //this.httpClient.get("https://rest.arbeitsagentur.de/infosysbub/entgeltatlas/pc/v1/entgelte/[KldB-Schlüssel]?l=4&r=1&g=1&a=1&b=1").subscribe(x=>console.log(x))
  }
}
