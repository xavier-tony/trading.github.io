import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuysellprogressComponent } from './buysellprogress.component';

describe('BuysellprogressComponent', () => {
  let component: BuysellprogressComponent;
  let fixture: ComponentFixture<BuysellprogressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuysellprogressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuysellprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
