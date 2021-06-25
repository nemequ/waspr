import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrinsicsComponent } from './intrinsics.component';

describe('IntrinsicsComponent', () => {
  let component: IntrinsicsComponent;
  let fixture: ComponentFixture<IntrinsicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntrinsicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntrinsicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
