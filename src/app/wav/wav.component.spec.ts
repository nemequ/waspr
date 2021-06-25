import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WavComponent } from './wav.component';

describe('WavComponent', () => {
  let component: WavComponent;
  let fixture: ComponentFixture<WavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
