import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfModaleComponent } from './pdf-modale.component';

describe('PdfModaleComponent', () => {
  let component: PdfModaleComponent;
  let fixture: ComponentFixture<PdfModaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfModaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdfModaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
