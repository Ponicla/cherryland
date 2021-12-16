import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public app_name = environment.app_name;
  public route_assets = environment.route_assets;

  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  open_page(page: string){
    this.router.navigate([page]);
  }

}
