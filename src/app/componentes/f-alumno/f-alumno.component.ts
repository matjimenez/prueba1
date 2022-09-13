import { Component, Input, Output, EventEmitter  } from '@angular/core';


@Component({
  selector: 'app-f-alumno',
  templateUrl: './f-alumno.component.html',
  styleUrls: ['./f-alumno.component.scss']
})
export class FAlumnoComponent {

  @Output() public salida = new EventEmitter();
  @Output() public salidaString = new EventEmitter<String>();

  public nuevoRut(evento: Event):void{
    const elemento = evento.target as HTMLInputElement;
    this.salida.emit();
  }

  public nuevoNombre(evento: Event):void{
    const elemento = evento.target as HTMLInputElement;
    this.salida.emit();
  }

  public nuevoApellido(evento: Event):void{
    const elemento = evento.target as HTMLInputElement;
    this.salida.emit();
  }

  public nuevaEdad(evento: Event):void{
    const elemento = evento.target as HTMLInputElement;
    this.salida.emit();
  }







}
