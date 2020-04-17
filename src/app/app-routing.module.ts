import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EffectuationComponent } from './pages/effectuation/effectuation.component';
import { HeaderComponent } from './shared/components/header/header.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'effectuation', component: EffectuationComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

export const AppModuleComponents = [
  EffectuationComponent,
  HomeComponent,
  HeaderComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }