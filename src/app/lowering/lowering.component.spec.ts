import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoweringComponent } from './lowering.component';

describe('LoweringComponent', () => {
  let component: LoweringComponent;
  let fixture: ComponentFixture<LoweringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoweringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoweringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
