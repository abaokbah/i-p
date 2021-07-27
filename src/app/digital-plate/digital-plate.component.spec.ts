import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalPlateComponent } from './digital-plate.component';

describe('DigitalPlateComponent', () => {
  let component: DigitalPlateComponent;
  let fixture: ComponentFixture<DigitalPlateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalPlateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalPlateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
