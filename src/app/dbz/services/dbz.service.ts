import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interfaces';

@Injectable()
export class DbzService {
    private _personajes: Personaje[] = [
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
        nombre: 'Roshi',
        poder: 500
      }
    
    get personajes() : Personaje[] {
          return [...this._personajes];
      }

    agregarPersonaje(item: Personaje) {
      this._personajes.push(item);
    }
}