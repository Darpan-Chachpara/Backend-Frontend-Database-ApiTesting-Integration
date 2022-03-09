import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './webpages/home/home.component';
import { MainpageComponent } from './webpages/mainpage/mainpage.component';

const routes: Routes = [
  { path:'', component:HomeComponent, pathMatch: 'full'  },
    {path:'mainpage',component:MainpageComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
