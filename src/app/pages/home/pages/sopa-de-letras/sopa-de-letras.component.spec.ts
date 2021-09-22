import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SopaDeLetrasComponent } from './sopa-de-letras.component';

describe('SopaDeLetrasComponent', () => {
  let component: SopaDeLetrasComponent;
  let fixture: ComponentFixture<SopaDeLetrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SopaDeLetrasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SopaDeLetrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
