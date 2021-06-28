import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WavDetailComponent } from './wav-detail.component';

describe('WavDetailComponent', () => {
  let component: WavDetailComponent;
  let fixture: ComponentFixture<WavDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WavDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WavDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
