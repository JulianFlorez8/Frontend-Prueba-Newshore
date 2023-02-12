import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneyInformationComponent } from './journey-information.component';

describe('JourneyInformationComponent', () => {
  let component: JourneyInformationComponent;
  let fixture: ComponentFixture<JourneyInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JourneyInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JourneyInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
