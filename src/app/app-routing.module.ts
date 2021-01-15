import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home';
import { FourComponent } from './requirements/four/four';
import { OneComponent } from './requirements/one/one';
import { ThreeComponent } from './requirements/three/three';
import { TwoComponent } from './requirements/two/two';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'one', component: OneComponent },
  { path: 'two', component: TwoComponent },
  { path: 'three', component: ThreeComponent },
  { path: 'four', component: FourComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes), AppRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
