import { Injectable } from '@angular/core';
import { graphql, GraphQLObjectType, GraphQLArgs, GraphQLSchema} from 'graphql';
import { buildSchema } from 'graphql/utilities';
import { AppSettings } from './AppSetting';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './structs';


@Injectable({
  providedIn: 'root'
})
export class GraphqlService {
  private headers: HttpHeaders
  private schema: GraphQLSchema;
  constructor(private httpClient: HttpClient) { 
    this.headers = new HttpHeaders();
    this.headers = this.headers.set('Content-Type', 'application/json; charset=utf-8');
    //this.headers = this.headers.set('Content-Type', 'application/graphql')
    this.schema = buildSchema(AppSettings.SCHEMA_STRING);
  }

  login (): Observable<any>{
    var query = {"query": "query{ users{ id name email }}"}
    //var query = 'query{ users{ id name email }}'
    return this.httpClient.post<JSON>(AppSettings.API_GRAPHQL_ENDPOINT, query, {headers: this.headers})
  }

  register(user: User){

  }

  changePw(){

  }

  sendQuery(query:String, variables?:JSON){

  }
  sendMutation(){

  }
}
