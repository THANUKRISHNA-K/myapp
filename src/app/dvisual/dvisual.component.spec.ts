import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DvisualComponent } from './dvisual.component';

describe('DvisualComponent', () => {
  let component: DvisualComponent;
  let fixture: ComponentFixture<DvisualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DvisualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DvisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
