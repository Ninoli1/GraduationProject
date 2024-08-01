import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardMessageComponent } from './reward-message.component';

describe('RewardMessageComponent', () => {
  let component: RewardMessageComponent;
  let fixture: ComponentFixture<RewardMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RewardMessageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RewardMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
