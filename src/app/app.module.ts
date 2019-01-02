import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule }  from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FilmsListComponent } from './films-list/films-list.component';
import { PeliculasService } from './peliculas.service';
import { FilmsDetailComponent } from './films-detail/films-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmsListComponent,
    FilmsDetailComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
