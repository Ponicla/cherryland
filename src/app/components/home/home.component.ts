import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { SharedService } from '../../services/shared.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public get_subscription: Subscription = new Subscription;
  public get_subscription_file: Subscription = new Subscription;
  public list_directory : any;
  public list = this.shared.list_of_routes;

  constructor(
    private api: ApiService,
    private shared : SharedService
  ) { 
  }
  
  ngOnInit(){
    this.get('files', '');
  }

  get_route(){
    let router = '';
    this.shared.list_of_routes.forEach( element => {
      if(element !== ''){
        router +=  "/"+element;
      }
    });
    return {sub_route: router};
  }

  get(route: string, objetc: any){
    if(objetc){ this.shared.add(objetc) }
    this.get_subscription = this.api.get(route, this.get_route()).subscribe( (data : any) => {
      this.list_directory = data;
    })
  }

  get_file(route: string, name: string){
    var obj = {
      name: name,
      sub_route: this.get_route().sub_route
    }
    this.get_subscription_file = this.api.get_file(route, obj).subscribe( (data : any) => {
        var file = new Blob([data], {
          type: data.type
        });
        var fileURL = URL.createObjectURL(file);
        window.open(fileURL);
    })
  }

  remove_route(){
    this.shared.list_of_routes.pop();
    this.get('files', null);
  }

  delete_file(){
    Swal.fire({
      // title: 'Esta seguro de eliminar este archivo?',
      html: "Va a eliminar este archivo, está seguro?",
      // icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#B0B0B0',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Volver'
    }).then((result) => {
      if (result.isConfirmed) {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'success',
          title: 'Archivo eliminado'
        })
      }
    })
  }

  ngOnDestroy() {
    this.get_subscription.unsubscribe();
    this.get_subscription_file.unsubscribe();
  }

}
