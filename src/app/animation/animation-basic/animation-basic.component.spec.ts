import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationBasicComponent } from './animation-basic.component';

describe('AnimationBasicComponent', () => {
  let component: AnimationBasicComponent;
  let fixture: ComponentFixture<AnimationBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimationBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
