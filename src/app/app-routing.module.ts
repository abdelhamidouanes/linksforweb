import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BigmenuComponent } from './bigmenu/bigmenu.component';

const routes: Routes = [
  { path: 'menuprincipale', component: BigmenuComponent },
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo : 'home', pathMatch : 'full'},
  { path: '**', redirectTo : 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
