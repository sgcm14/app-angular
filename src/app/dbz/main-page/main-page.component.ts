import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  // personajes: Personaje [] = [];

  nuevo: Personaje = {
    nombre: ' Gohan',
    poder: 600
  };

  // get personajes():Personaje[]{
  //   return this.dbzService.personajes;
  // }

  // agregarNuevoPersonaje(argumento: Personaje){
  //   this.personajes.push(argumento);
  // }

  //  constructor(private dbzService: DbzService){
  //    this.personajes = this.dbzService.personajes;
  //  }
}
