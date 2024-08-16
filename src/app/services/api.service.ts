import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private route = 'http://192.168.0.96:3000/';

  constructor(
    private api: HttpClient
  ) { }

  get(route : String, objetc : Object){
    const url = this.route+route;
    return this.api.post(url, objetc).pipe(map(data  => data));
  }

  get_file(route : String, objetc : Object){
    const url = this.route+route;
    return this.api.post(url, objetc, {responseType: "blob", headers: new HttpHeaders().append("Content-Type", "application/json")}).pipe(map(data  => data));
  }

  obtener(route : String, objetc : Object){
    const url = this.route+route;
    return this.api.get(url, objetc).pipe(map(data  => data));
  }
  
}
