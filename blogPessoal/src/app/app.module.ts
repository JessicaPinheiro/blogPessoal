import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { OrderModule } from 'ngx-order-pipe'
import { ModalModule} from 'ngx-bootstrap/modal'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FeedComponent } from './feed/feed.component';
import { PerfilComponent } from './perfil/perfil.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PostTemaComponent } from './post-tema/post-tema.component';
import { PutTemaComponent } from './put-tema/put-tema.component';
import { PutPostagemComponent } from './put-postagem/put-postagem.component';
import { DeleteTemaComponent } from './delete-tema/delete-tema.component';
import { DeletePostagemComponent } from './delete-postagem/delete-postagem.component';
import { AlertasComponent } from './alertas/alertas.component';
import { from } from 'rxjs';

import { HashLocationStrategy, LocationStrategy} from '@angular/common'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    FeedComponent,
    PerfilComponent,
    LoginComponent,
    CadastroComponent,
    PostTemaComponent,
    PutTemaComponent,
    PutPostagemComponent,
    DeleteTemaComponent,
    DeletePostagemComponent,
    AlertasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    OrderModule,
    ModalModule.forRoot()
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
