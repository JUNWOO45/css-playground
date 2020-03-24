import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShakingComponent } from './shaking.component';

describe('ShakingComponent', () => {
  let component: ShakingComponent;
  let fixture: ComponentFixture<ShakingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShakingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShakingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
