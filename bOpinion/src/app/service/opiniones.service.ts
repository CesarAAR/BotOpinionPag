import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PrincipalModel } from '../models/principal.models';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class OpinionesService {

  private url = 'https://botopinion-default-rtdb.firebaseio.com';

  constructor( private http: HttpClient) {

   }

   crearOpinion( principal: PrincipalModel){
    return this.http.post(`${ this.url }/opiniones.json`, principal).pipe(
      map( (resp:any)=>{
        principal.id=resp.name;
        return principal;
      } )
    )
  }

  actualizarOpinion( principal: PrincipalModel){
    return this.http.put(`${ this.url }/opiniones/${ principal.id }.json`, principal);
  }

  getOpiniones(){
    return this.http.get(`${ this.url }/opiniones.json`).pipe(
      map(this.crearArreglo)
    );
  }

  private crearArreglo(principalOBJ: object){
    const princip: PrincipalModel[]=[];
    console.log(principalOBJ);
    Object.keys( principalOBJ ).forEach(key=> {
      const opi: PrincipalModel =  principalOBJ[key];
      opi.id=key;
      princip.push( opi );
    });

    return princip;
  }
}

