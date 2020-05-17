import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OtherCountriesComponent } from './pages/other-countries/other-countries.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'outros-paises', component: OtherCountriesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
