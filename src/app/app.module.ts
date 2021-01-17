import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'


import { AppComponent } from './app.component';
import { LoginSigninComponent } from './components/login/login-signin/login-signin.component';
import { LoginSignupComponent } from './components/login/login-signup/login-signup.component';
import { LoginCodeComponent } from './components/login/login-code/login-code.component';
import { LoginComponent } from './view/login/login.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardDatatableComponent } from './components/dashboard/dashboard-datatable/dashboard-datatable.component'

// Importación del modulo de material
import { MaterialModule } from './material/material.module';

// Definición de rutas
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },

]

@NgModule({
  declarations: [
    AppComponent,
    LoginSigninComponent,
    LoginSignupComponent,
    LoginCodeComponent,
    LoginComponent,
    DashboardComponent,
    DashboardDatatableComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
