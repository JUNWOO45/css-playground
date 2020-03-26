import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlingComponent } from './bling.component';

describe('BlingComponent', () => {
  let component: BlingComponent;
  let fixture: ComponentFixture<BlingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
