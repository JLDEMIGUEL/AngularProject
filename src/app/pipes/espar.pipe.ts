import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name:'espar'}) 
export class EsParPipe implements PipeTransform{
    transform(value: any, ...args: any[]) {
        return value%2==0? "El año "+value+" es par":"El año "+value+" es impar"
    }
}