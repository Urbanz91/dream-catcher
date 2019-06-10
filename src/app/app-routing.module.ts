import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { MyDreamsComponent } from './content/dream-catcher/main-block/my-dreams/my-dreams.component';
import { DreamsPatternComponent } from './content/dream-catcher/main-block/dreams-pattern/dreams-pattern.component';
import { DreamsStatisticComponent } from './content/dream-catcher/main-block/dreams-statistic/dreams-statistic.component';

const routes: Route[] = [
  {
    path: 'login',
    loadChildren: () => import('./content/auth/login/login-routing.module').then(mod => mod.LoginRoutingModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./content/auth/signup/signup-routing.module').then(mod => mod.SignupRoutingModule)
  },
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
