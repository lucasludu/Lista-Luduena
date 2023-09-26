import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaAlumnoComponent } from './lista-alumno/lista-alumno.component';
import { TituloDirective } from './directives/titulo.directive';

@NgModule({
  declarations: [
    AppComponent,
    ListaAlumnoComponent,
    TituloDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
