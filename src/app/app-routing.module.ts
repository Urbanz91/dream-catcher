import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyDreamsComponent } from './components/main-block/my-dreams/my-dreams.component';
import { DreamsPatternComponent } from './components/main-block/dreams-pattern/dreams-pattern.component';
import { DreamsStatisticComponent } from './components/main-block/dreams-statistic/dreams-statistic.component';

const routes: Routes = [
  { path: '', redirectTo: '/my-dreams', pathMatch: 'full' },
  { path: 'my-dreams', component: MyDreamsComponent },
  { path: 'dreams-pattern', component: DreamsPatternComponent },
  { path: 'dreams-statistic', component: DreamsStatisticComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
