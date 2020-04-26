import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Covid19dataComponent } from './covid19data.component';

describe('Covid19dataComponent', () => {
  let component: Covid19dataComponent;
  let fixture: ComponentFixture<Covid19dataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Covid19dataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Covid19dataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
