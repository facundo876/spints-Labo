import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MayoroMenorComponent } from './mayoro-menor.component';

describe('MayoroMenorComponent', () => {
  let component: MayoroMenorComponent;
  let fixture: ComponentFixture<MayoroMenorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MayoroMenorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MayoroMenorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
