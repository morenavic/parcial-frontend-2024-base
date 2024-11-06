import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { InterfaceCursos } from '../interface/interface.cursos';
import { CursoService } from '../service/curso.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-mis-cursos',
  standalone: true,
  imports: [TableModule,
    NgFor],
  templateUrl: './mis-cursos.component.html'
})
export class MisCursosComponent implements OnInit{
  
  cursos : InterfaceCursos[]=[];
  
  constructor(private cursoService: CursoService){
  }

  ngOnInit(): void {
    this.cargarCursos();
  }

  cargarCursos(): void {
    this.cursoService.obtenerCursos().subscribe(data => {
      this.cursos = data;
      console.log(data)
    });
  }
}
