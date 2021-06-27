import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WavFunctionComponent } from './wav-function.component';

describe('WavFunctionComponent', () => {
  let component: WavFunctionComponent;
  let fixture: ComponentFixture<WavFunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WavFunctionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WavFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
