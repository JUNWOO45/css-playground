import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PulseComponent } from './pulse.component';

describe('PulseComponent', () => {
  let component: PulseComponent;
  let fixture: ComponentFixture<PulseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PulseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PulseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
