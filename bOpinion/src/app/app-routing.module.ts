/* Encargado de manejar mis rutas*/
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './paginas/index/index.component';
import { LoginComponent } from './paginas/login/login.component';
import { PrincipalComponent } from './paginas/principal/principal.component';

const routes: Routes =[
  {path:'index', component: IndexComponent },
  {path:'login',component:LoginComponent},
  {path:'principal',component:PrincipalComponent},
  {path:'**', pathMatch:'full',redirectTo:'index'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
