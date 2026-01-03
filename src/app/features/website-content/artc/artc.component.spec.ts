import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ARTCComponent } from './artc.component';

describe('ARTCComponent', () => {
  let component: ARTCComponent;
  let fixture: ComponentFixture<ARTCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ARTCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ARTCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
