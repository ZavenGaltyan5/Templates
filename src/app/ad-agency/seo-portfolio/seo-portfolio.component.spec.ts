import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoPortfolioComponent } from './seo-portfolio.component';

describe('SeoPortfolioComponent', () => {
  let component: SeoPortfolioComponent;
  let fixture: ComponentFixture<SeoPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeoPortfolioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeoPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
