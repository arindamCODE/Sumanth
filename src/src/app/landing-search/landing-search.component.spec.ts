import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingSearchComponent } from './landing-search.component';

describe('LandingSearchComponent', () => {
  let component: LandingSearchComponent;
  let fixture: ComponentFixture<LandingSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
