import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EstabelecimentoComponent } from './estabelecimento/estabelecimento.component';
import { ProfissionalComponent } from './profissional/profissional.component';
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
import { EstabelecimentoService } from './estabelecimento/estabelecimento.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfissionalService } from './profissional/profissional.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EstabelecimentoComponent,
    ProfissionalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES),
    MDBBootstrapModule.forRoot()
  ],
  providers: [
    EstabelecimentoService,
    ProfissionalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
