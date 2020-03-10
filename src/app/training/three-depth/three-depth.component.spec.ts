import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDepthComponent } from './three-depth.component';

describe('ThreeDepthComponent', () => {
  let component: ThreeDepthComponent;
  let fixture: ComponentFixture<ThreeDepthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeDepthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeDepthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
