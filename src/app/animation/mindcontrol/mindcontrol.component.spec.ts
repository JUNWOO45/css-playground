import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MindcontrolComponent } from './mindcontrol.component';

describe('MindcontrolComponent', () => {
  let component: MindcontrolComponent;
  let fixture: ComponentFixture<MindcontrolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MindcontrolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MindcontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
