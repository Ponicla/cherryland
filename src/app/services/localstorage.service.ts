import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  private item_route_ls : string = environment.item_route_ls;

  constructor() { 
    this.remove(this.item_route_ls);
  }

  add(item: string, route: string){
    if(localStorage.getItem(this.item_route_ls)){
      this.update(this.get(this.item_route_ls), route);
      console.log('Actualizar item', route);
    }else{
      console.log('Agregar item');
      localStorage.setItem(this.item_route_ls, JSON.stringify({route: [route]}));
    }
  }

  get(item: string){
    return localStorage.getItem(item);
  }

  remove(item: string){
    localStorage.removeItem(item);
  }

  update(item: any, route: string){
    let item_object = JSON.parse(item);
    console.log(item_object);
    item_object.route.push(route);
    localStorage.setItem(this.item_route_ls, JSON.stringify(item_object));
  }
}
