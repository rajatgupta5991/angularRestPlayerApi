import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyntraComponent } from './myntra.component';

describe('MyntraComponent', () => {
  let component: MyntraComponent;
  let fixture: ComponentFixture<MyntraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyntraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyntraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
