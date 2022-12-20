import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDescModaleComponent } from './add-desc-modale.component';

describe('AddDescModaleComponent', () => {
  let component: AddDescModaleComponent;
  let fixture: ComponentFixture<AddDescModaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDescModaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDescModaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
