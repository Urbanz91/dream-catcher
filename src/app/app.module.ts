import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterialModule } from './components/angular-material/main';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { MyDreamsComponent } from './components/main-block/my-dreams/my-dreams.component';
import { DreamsPatternComponent } from './components/main-block/dreams-pattern/dreams-pattern.component';
import { DreamsStatisticComponent } from './components/main-block/dreams-statistic/dreams-statistic.component';

import { MoodParserPipe } from './pipes/mood-parser.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MyDreamsComponent,
    DreamsPatternComponent,
    DreamsStatisticComponent,
    MoodParserPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularMaterialModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
    library.add(fas);
  }
}
