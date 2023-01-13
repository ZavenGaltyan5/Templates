import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdAgencyComponent } from './ad-agency.component';

describe('AdAgencyComponent', () => {
  let component: AdAgencyComponent;
  let fixture: ComponentFixture<AdAgencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdAgencyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
