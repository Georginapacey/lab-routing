import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component'
import {ContactComponent} from './components/contact/contact.component'
import {AboutComponent} from './components/about/about.component'
import {NotFoundComponent} from './components/not-found/not-found.component'

const routes: Routes = [
  { path:'home', component: HomeComponent },
  { path:'about', component: AboutComponent },
  { path:'contact/:name', component: ContactComponent },
  { path:'', redirectTo:'/home', pathMatch:'full'},
  { path:'**', component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
