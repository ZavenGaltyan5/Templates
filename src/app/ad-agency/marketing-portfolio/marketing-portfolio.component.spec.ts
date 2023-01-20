import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingPortfolioComponent } from './marketing-portfolio.component';

describe('MarketingPortfolioComponent', () => {
  let component: MarketingPortfolioComponent;
  let fixture: ComponentFixture<MarketingPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketingPortfolioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketingPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
