import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioSeccionComponent } from './componentes/formulario-seccion/formulario-seccion.component';
import { FAlumnoComponent } from './componentes/f-alumno/f-alumno.component';
import { LHistorialComponent } from './componentes/l-historial/l-historial.component';
import { LAlumnosComponent } from './componentes/l-alumnos/l-alumnos.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioSeccionComponent,
    FAlumnoComponent,
    LHistorialComponent,
    LAlumnosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
