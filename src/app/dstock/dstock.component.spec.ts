import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DstockComponent } from './dstock.component';

describe('DstockComponent', () => {
  let component: DstockComponent;
  let fixture: ComponentFixture<DstockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DstockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
