import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './feature/pages/home/home.component';
import { PageNotFoundComponent } from './feature/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  // {
  //   path: '**',
  //   component: PageNotFoundComponent
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      anchorScrolling: 'enabled',
      onSameUrlNavigation: 'reload',
      scrollPositionRestoration: 'enabled'
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
