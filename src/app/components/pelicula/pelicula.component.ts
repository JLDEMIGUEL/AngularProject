import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  @Input() pelicula: Pelicula = new Pelicula('','',0);
  @Output() peliculaFav : EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  seleccionar( event: MouseEvent, pelicula: Pelicula){
    this.peliculaFav.emit({pelicula});
  }

}
