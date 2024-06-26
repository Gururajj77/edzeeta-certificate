import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifiedPopupComponent } from './verified-popup.component';

describe('VerifiedPopupComponent', () => {
  let component: VerifiedPopupComponent;
  let fixture: ComponentFixture<VerifiedPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerifiedPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerifiedPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
