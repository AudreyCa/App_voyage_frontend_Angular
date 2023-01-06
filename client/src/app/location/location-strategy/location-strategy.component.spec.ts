import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationStrategyComponent } from './location-strategy.component';

describe('LocationStrategyComponent', () => {
  let component: LocationStrategyComponent;
  let fixture: ComponentFixture<LocationStrategyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationStrategyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
