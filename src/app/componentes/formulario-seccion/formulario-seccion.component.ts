import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario-seccion',
  templateUrl: './formulario-seccion.component.html',
  styleUrls: ['./formulario-seccion.component.scss']
})
export class FormularioSeccionComponent  {
  @Output() public salida = new EventEmitter();
  @Output() public salidaString = new EventEmitter<String>();

  public id: number=1;

  public aumentarId():void{
    this.id=this.id+1;
  }

  public crear(evento : Event):void{
    const elemento = evento.target as HTMLInputElement;
  }

  public nuevaSeccion(evento: Event):void{
    const elemento = evento.target as HTMLInputElement;
    this.salida.emit();
  }




}
