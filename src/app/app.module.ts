import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { InitialComponent } from './initial/initial.component';
import { LocalComponent } from './local/local.component';
import { ProjectComponent } from './project/project.component';
import { InterestComponent } from './interest/interest.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    InitialComponent,
    LocalComponent,
    ProjectComponent,
    InterestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
