import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { HelloComponent } from './hello.component';
import { MainComponent } from './main/main.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ 
    AppComponent, HelloComponent ,NavComponent,SidebarComponent, MainComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
