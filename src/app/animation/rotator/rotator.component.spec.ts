import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RotatorComponent } from './rotator.component';

describe('RotatorComponent', () => {
  let component: RotatorComponent;
  let fixture: ComponentFixture<RotatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RotatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RotatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
