import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkytechComponent } from './skytech.component';

describe('SkytechComponent', () => {
  let component: SkytechComponent;
  let fixture: ComponentFixture<SkytechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkytechComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkytechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
