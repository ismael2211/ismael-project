import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Boxeador } from './boxeador';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class BoxeadoresService {

  constructor(private http: HttpClient) { }
  boxeadoresURL = '/assets/boxeadores.json';
  getBoxeadores(): Observable<Boxeador[]> {   // retorna un observable al que cal subscriure's
    return this.http.get<{ boxeadores: Boxeador[] }>(this.boxeadoresURL).pipe( // get retorna un observable i pipe accepta funcions de manipulació de les dades
      map(response => response.boxeadores) // de la resposta traguem l'array que ens interessa
    );
  }

  getBoxeador(id: string): Observable<Boxeador> {   // retorna un observable al que cal subscriure's
    return this.http.get<{ boxeadores: Boxeador[] }>(this.boxeadoresURL).pipe( // get retorna un observable i pipe accepta funcions de manipulació de les dades
      map(response => response.boxeadores.filter(b => b.id === id)[0]) // de la resposta traguem l'array que ens interessa
    );
  }
}
