import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppListModaleComponent } from './supp-list-modale.component';

describe('SuppListModaleComponent', () => {
  let component: SuppListModaleComponent;
  let fixture: ComponentFixture<SuppListModaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuppListModaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuppListModaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
