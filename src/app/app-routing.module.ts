import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SliderComponent } from './component/component/slider/slider.component';
import { TableComponent } from './component/component/table/table.component';
import { HomeComponent } from './component/layout/home/home.component';
import { FooterComponent } from './component/utils/footer/footer.component';
import { NavbarComponent } from './component/utils/navbar/navbar.component';
import { StripHeadComponent } from './component/utils/strip-head/strip-head.component';

const routes: Routes = [
  // Pages
  {path:"", component:HomeComponent},


  // Utils
  {path:"navbar", component:NavbarComponent},
  {path:"footer", component:FooterComponent},
  {path:"strip-head", component:StripHeadComponent},

  // Component
  {path:'table', component:TableComponent},
  {path:'slider', component:SliderComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
