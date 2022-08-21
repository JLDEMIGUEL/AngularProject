import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculaService]
})
export class PeliculasComponent implements OnInit {

  public peliculas : Array<Pelicula>;
  public favorita : Pelicula = null as any;

  constructor(
    private _peliculaService:PeliculaService
  ) {
    this.peliculas = _peliculaService.getPeliculas();
   }

  ngOnInit(): void {
  }

  mostrarFavorita(event: any){
    this.favorita = event.pelicula;
  }

}
