import { Component } from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';


@Component({
  selector: 'app-all-portfolio',
  templateUrl: './all-portfolio.component.html',
  styleUrls: ['./all-portfolio.component.css']
})
export class AllPortfolioComponent {

  constructor(private route:Router) {
  }

}
