import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrinsicDetailComponent } from './intrinsic-detail.component';

describe('IntrinsicDetailComponent', () => {
  let component: IntrinsicDetailComponent;
  let fixture: ComponentFixture<IntrinsicDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntrinsicDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntrinsicDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
