import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifTitleModaleComponent } from './modif-title-modale.component';

describe('ModifTitleModaleComponent', () => {
  let component: ModifTitleModaleComponent;
  let fixture: ComponentFixture<ModifTitleModaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifTitleModaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifTitleModaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
