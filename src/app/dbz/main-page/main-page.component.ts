import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {
  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegetta',
      poder: 7500
    }
  ];
  
  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  cambiarNombre(event: any) : void {
    console.log(event.target.value)
  }
  
  agregar() : void {
    if (this.nuevo.nombre.trim().length === 0) { return; }
    this.personajes.push(this.nuevo);
    console.log(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0
    };
  }

}

