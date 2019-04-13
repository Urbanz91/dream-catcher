import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterial } from './components/angular-material/main';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularMaterial
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
