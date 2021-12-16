import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  public dtOptions: DataTables.Settings = {};
  public lista_de_usuarios: any;
  public dtTrigger: Subject<any> = new Subject<any>();

  constructor(
    private api: ApiService
  ) {
    this.obtener('get_usuarios', {});
   }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'simple_numbers',
      pageLength: 10, 
      "language": { "url": "//cdn.datatables.net/plug-ins/1.10.16/i18n/Spanish.json", } 
    };
  }

  obtener(ruta: String, objeto: Object){
    this.api.obtener(ruta, objeto).subscribe( (data : any) => {
      this.lista_de_usuarios = data;
      this.dtTrigger.next();
    });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
