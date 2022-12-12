import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProfilModalComponent } from './delete-profil-modal.component';

describe('DeleteProfilModalComponent', () => {
  let component: DeleteProfilModalComponent;
  let fixture: ComponentFixture<DeleteProfilModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteProfilModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteProfilModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
