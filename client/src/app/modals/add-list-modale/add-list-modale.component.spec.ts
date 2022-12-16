import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddListModaleComponent } from './add-list-modale.component';

describe('AddListModaleComponent', () => {
  let component: AddListModaleComponent;
  let fixture: ComponentFixture<AddListModaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddListModaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddListModaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
