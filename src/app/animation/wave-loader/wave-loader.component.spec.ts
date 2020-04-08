import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaveLoaderComponent } from './wave-loader.component';

describe('WaveLoaderComponent', () => {
  let component: WaveLoaderComponent;
  let fixture: ComponentFixture<WaveLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaveLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaveLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
