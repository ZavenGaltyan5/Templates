import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AllPortfolioComponent} from "./ad-agency/all-portfolio/all-portfolio.component";
import {GraphicPortfolioComponent} from "./ad-agency/graphic-portfolio/graphic-portfolio.component";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
