import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockgrpahicComponent } from './stockgrpahic.component';

describe('StockgrpahicComponent', () => {
  let component: StockgrpahicComponent;
  let fixture: ComponentFixture<StockgrpahicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockgrpahicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockgrpahicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
