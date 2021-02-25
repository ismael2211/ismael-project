import { Pipe, PipeTransform } from '@angular/core';
import { Boxeador } from './boxeador';

@Pipe({
  name: 'filtrarBoxeador'
})
export class FiltrarBoxeadorPipe implements PipeTransform {

  transform(boxeadores: Boxeador[], buscar: string): Boxeador[] {
     buscar != buscar ? buscar.toLocaleLowerCase() : null;
    boxeadores = buscar ? boxeadores.filter(b => b.nombre?.toLocaleLowerCase().includes(buscar)) : boxeadores;
    return boxeadores;

  }


}
