import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';     /*add each page (component) */
import { AboutComponent } from './about/about.component';  /*add page */
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent    /* add the route path for each page*/
  },
  {
    path: 'about/:id',
  component: AboutComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
