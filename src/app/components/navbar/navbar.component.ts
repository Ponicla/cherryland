import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment.prod';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public app_name = environment.app_name;
  public route_assets = environment.route_assets;

  constructor() { }

  ngOnInit(): void {
  }

  open_page(page: string){
    alert(page);
  }

}
