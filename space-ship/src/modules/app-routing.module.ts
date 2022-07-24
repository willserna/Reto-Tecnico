import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from 'src/pages/home-page/home-page.component';
import { ShipDetailPageComponent } from 'src/pages/ship-detail-page/ship-detail-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'ship-detail', component: ShipDetailPageComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
