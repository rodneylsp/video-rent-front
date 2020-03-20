import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteServiceService } from '../service/cliente-service.service'

@NgModule({
  declarations: [
    AppComponent,
    ClienteListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ClienteServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
