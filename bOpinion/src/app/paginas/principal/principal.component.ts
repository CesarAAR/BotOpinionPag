import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OpinionesService } from 'src/app/service/opiniones.service';
import { PrincipalModel } from '../../models/principal.models';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  princip : PrincipalModel[]=[];


  principal= new PrincipalModel();


  constructor( private opinionesService: OpinionesService) { 
    
  }

  ngOnInit() {
    this.opinionesService.getOpiniones().subscribe( resp => { this.princip = resp})
  }

  guardar( form:NgForm){

    Swal.fire({
      title:'Espere',
      text:'Guardando Informacion',
      icon:'info',
      allowOutsideClick:false
    })

    Swal.showLoading();

    let peticion: Observable<any>;

      if( this.principal.id ){
        peticion=this.opinionesService.actualizarOpinion(this.principal);
      } else {
        peticion=this.opinionesService.crearOpinion(this.principal);
      }

      peticion.subscribe( resp => {
         Swal.fire({
          title: this.principal.id,
          text: 'Se actualizo correctamente.',
          icon: 'success'
         }); 
      });
  }

  id: string;
  opinion: string;
  tipo: string;

  datos = ['positivo','neutro','negativo'];

capturar() {
  this.tipo=this.tipo;
}

}
