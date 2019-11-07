import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReservaModule} from './reserva/reserva.module'

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ReservaService } from "./reserva/reserva.service";
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing/app-routing.module';
import { NotificacionModule } from "./notificacion/notificacion.module";
import { NotificacionService } from "./notificacion/notificacion.service";

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReservaModule, HttpClientModule , AppRoutingModule, NotificacionModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
  providers:     [ ReservaService, NotificacionService]
})
export class AppModule { }
