import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterial } from './components/angular-material/main';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { MyDreamsComponent } from './components/main-block/my-dreams/my-dreams.component';
import { DreamsPatternComponent } from './components/main-block/dreams-pattern/dreams-pattern.component';
import { DreamsStatisticComponent } from './components/main-block/dreams-statistic/dreams-statistic.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MyDreamsComponent,
    DreamsPatternComponent,
    DreamsStatisticComponent
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
