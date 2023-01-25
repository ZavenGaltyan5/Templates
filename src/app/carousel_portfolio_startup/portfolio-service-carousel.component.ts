import {Component, OnInit} from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";

@Component({
  selector: 'app-portfolio-service-carousel',
  templateUrl: './portfolio-service-carousel.component.html',
  styleUrls: ['./portfolio-service-carousel.component.css']
})
export class PortfolioServiceCarouselComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    dotsSpeed: !1,
    navSpeed: 3000,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    autoplaySpeed: !1,
    // navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      },
      1920: {
        items: 1
      }
    },
    nav: false,
  }
}
