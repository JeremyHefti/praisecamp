import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MenubarModule} from "primeng/menubar";
import { EventComponent } from './event/event.component';
import { CardComponent } from './card/card.component';
import {CardModule} from "primeng/card";
import {Button} from "primeng/button";
import { InfoComponent } from './info/info.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    EventComponent,
    CardComponent,
    InfoComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    CardModule,
    Button,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
