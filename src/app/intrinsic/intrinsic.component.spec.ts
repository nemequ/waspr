import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrinsicComponent } from './intrinsic.component';

describe('IntrinsicComponent', () => {
  let component: IntrinsicComponent;
  let fixture: ComponentFixture<IntrinsicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntrinsicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntrinsicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
