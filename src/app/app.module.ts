import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {MaterialModule} from './material-module';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { TypescriptComponent } from './typescript/typescript.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MainComponent } from './main/main.component';
import { AngularComponent } from './angular/angular.component';
import { ReactComponent } from './react/react.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { GithubComponent, DialogOverview } from './github/github.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogOverview,
    TypescriptComponent,
    MainComponent,
    AngularComponent,
    ReactComponent,
    JavascriptComponent,
    GithubComponent
  ],
  imports: [
    AppRoutingModule,
    MaterialModule, 
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } }]
    ,
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
