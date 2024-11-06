import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { InterfaceCursos } from '../interface/interface.cursos';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private url = 'http://localhost:3000/cursos';
  private http = inject (HttpClient);

  constructor() {}

  obtenerCursos(): Observable<InterfaceCursos[]> {
    return this.http.get<InterfaceCursos[]>(this.url);
  }

}
