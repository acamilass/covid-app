import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherCountriesComponent } from './other-countries.component';

describe('OtherCountriesComponent', () => {
  let component: OtherCountriesComponent;
  let fixture: ComponentFixture<OtherCountriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherCountriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
