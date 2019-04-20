import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './components/angular-material/main';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AppRoutingModule } from './app-routing.module';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { NgModule } from '@angular/core';

import 'hammerjs';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { MyDreamsComponent } from './components/main-block/my-dreams/my-dreams.component';
import { DreamsPatternComponent } from './components/main-block/dreams-pattern/dreams-pattern.component';
import { DreamsStatisticComponent } from './components/main-block/dreams-statistic/dreams-statistic.component';
import { DreamCreateComponent } from './components/main-block/my-dreams/dream-create/dream-create.component';

import { MoodParserPipe } from './pipes/mood-parser.pipe';
import { DateParserPipe } from './pipes/date-parser.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MyDreamsComponent,
    DreamsPatternComponent,
    DreamsStatisticComponent,
    DreamCreateComponent,
    MoodParserPipe,
    DateParserPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularMaterialModule,
    FontAwesomeModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
    library.add(fas);
  }
}
