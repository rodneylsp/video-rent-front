import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Cliente} from '../model/cliente';


@Injectable({
  providedIn: 'root'
})
export class ClienteServiceService {

  private clientesUrl : string;

  constructor(private http: HttpClient) { 
    
    //this.clientesUrl = 'http://localhost:8080/videorent-core-1.0-SNAPSHOT/';
  }

  public findAll(){
    //return this.http.get<Cliente[]>(this.clientesUrl);
    return this.http.get<any[]>('http://localhost:8080/videorent-core-1.0-SNAPSHOT/cliente/get');
  }

  public save(cliente : Cliente){
    //return this.http.post<Cliente>(this.clientesUrl, cliente);
    return this.http.post<Cliente>('http://localhost:8080/videorent-core-1.0-SNAPSHOT/cliente/inserir', cliente);
  }

}
