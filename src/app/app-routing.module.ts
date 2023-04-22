import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContadorComponent } from './contador/contador/contador.component';
import { MainPageComponent } from 'src/app/dbz/components/pages/main-page/main-page.component';
import { HeroeComponent } from './heroes/heroe/heroe.component';
import { ListadoComponent } from './heroes/listado/listado.component';

const routes: Routes = [
  { path: 'contador', component: ContadorComponent },
  { path: 'heroe', component: HeroeComponent },
  { path: 'heroes', component: ListadoComponent },
  { path: 'dbz', component: MainPageComponent },
];

@NgModule({
  // declarations: [],
  // imports: [
  //   CommonModule
  // ]
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
