import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonatePayPalComponent } from './donate-pay-pal.component';

describe('DonatePayPalComponent', () => {
  let component: DonatePayPalComponent;
  let fixture: ComponentFixture<DonatePayPalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonatePayPalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonatePayPalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
