import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public list_of_routes : Array<any> = [];

  constructor() { }

  add(item: string){
    this.list_of_routes.push(item);
  }

}
