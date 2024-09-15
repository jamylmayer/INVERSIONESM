import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginationModule } from 'ngx-bootstrap/pagination';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './cliente/lista/lista.component';
import { RegistroComponent } from './cliente/registro/registro.component';
import { HeaderComponent } from './template/header/header.component';
import { SidebarComponent } from './template/sidebar/sidebar.component';
import { FooterComponent } from './template/footer/footer.component';
import { TemplateComponent } from './template/template/template.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ListaproductoComponent } from './producto/listaproducto/listaproducto.component';
import { RegistroproductoComponent } from './producto/registroproducto/registroproducto.component';
import { ListaproveedorComponent } from './proveedor/listaproveedor/listaproveedor.component';
import { RegistroproveedorComponent } from './proveedor/registroproveedor/registroproveedor.component';
import { ListausuarioComponent } from './usuario/listausuario/listausuario.component';
import { RegistrousuarioComponent } from './usuario/registrousuario/registrousuario.component';
import { ListaegresoComponent } from './egreso/listaegreso/listaegreso.component';
import { RegistroegresoComponent } from './egreso/registroegreso/registroegreso.component';
import { ListaingresoComponent } from './ingreso/lista/listaingreso.component';
import { PaginatorModule } from 'primeng/paginator';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { LoginComponent } from './login/login.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { InicioComponent } from './inicio/inicio.component';









@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    RegistroComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    TemplateComponent,
    NotFoundComponent,
    ListaproductoComponent,
    RegistroproductoComponent,
    ListaproveedorComponent,
    RegistroproveedorComponent,
    ListausuarioComponent,
    RegistrousuarioComponent,
    ListaegresoComponent,
    RegistroegresoComponent,
    ListaingresoComponent,
    LoginComponent,
    InicioComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    PaginatorModule,
    BsDatepickerModule,
    TableModule,
    ButtonModule,
    PaginationModule.forRoot(),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }