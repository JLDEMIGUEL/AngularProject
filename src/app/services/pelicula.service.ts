import { Injectable } from "@angular/core";
import { Pelicula } from "../models/pelicula";

@Injectable()
export class PeliculaService{
    holaMundo(){
        return 'hola mundo peliculaservice'
    }
    getPeliculas(){
        return [
            new Pelicula('Spiderman','https://upload.wikimedia.org/wikipedia/commons/9/90/Spiderman.JPG', 2020),
            new Pelicula('Los Vengadores','https://super-ficcion.com/wp-content/uploads/2022/02/Vengadores-infinity-war-780x470.webp', 2021),
            new Pelicula('Batman','https://wipy.tv/wp-content/uploads/2019/11/este-comic-podria-ser-la-respuesta-para-mpiderman-del-mcu-2019-11-25T175601.382-1200x900.jpg', 2019)
          ];
    }
}