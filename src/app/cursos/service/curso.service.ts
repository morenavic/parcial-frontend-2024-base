import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InterfaceCursos } from '../interface/interface.cursos';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private url = 'http://localhost:3000/cursos';

  constructor(private http: HttpClient) {}

  obtenerCursos(): Observable<InterfaceCursos[]> {
    return this.http.get<InterfaceCursos[]>(this.url);
  }

}
