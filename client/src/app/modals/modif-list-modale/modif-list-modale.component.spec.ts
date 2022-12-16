import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifListModaleComponent } from './modif-list-modale.component';

describe('ModifListModaleComponent', () => {
  let component: ModifListModaleComponent;
  let fixture: ComponentFixture<ModifListModaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifListModaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifListModaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
