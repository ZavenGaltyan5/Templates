import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GraphicPortfolioComponent} from "./graphic-portfolio.component";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraphicRoutingModule { }
