import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AllPortfolioComponent } from './ad-agency/all-portfolio/all-portfolio.component';
import { WebPortfolioComponent } from './ad-agency/web-portfolio/web-portfolio.component';
import { SeoPortfolioComponent } from './ad-agency/seo-portfolio/seo-portfolio.component';
import { MarketingPortfolioComponent } from './ad-agency/marketing-portfolio/marketing-portfolio.component';
import {AdAgencyComponent} from "./ad-agency/ad-agency.component";
import {GraphicPortfolioComponent} from "./ad-agency/graphic-portfolio/graphic-portfolio.component";

@NgModule({
  declarations: [
    AppComponent,
    AllPortfolioComponent,
    WebPortfolioComponent,
    SeoPortfolioComponent,
    MarketingPortfolioComponent,
    AdAgencyComponent,
    GraphicPortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
