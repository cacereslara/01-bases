import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitán américa'];
  heroeBorrado: string = '';

  borrarHeroe() {
    console.log('Borrando héroe...');
    this.heroeBorrado = this.heroes.pop() || '',
    console.log(this.heroeBorrado);
  }
  
}
