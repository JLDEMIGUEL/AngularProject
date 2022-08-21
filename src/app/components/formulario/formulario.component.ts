import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public user: any;
  public campo : any;

  constructor() { 
    this.user = {
      nombre:'',
      apellidos:'',
      bio:'',
      genero:''
    }
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.user);
  }

  hasDadoClick(){
    alert('1212')
  }
  hasSalido(){
    alert('has salido')
  }
  dadoEnter(){
    alert('has dado a enter')
  }

}
