import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NightCityComponent } from './night-city.component';

describe('NightCityComponent', () => {
  let component: NightCityComponent;
  let fixture: ComponentFixture<NightCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NightCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NightCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
