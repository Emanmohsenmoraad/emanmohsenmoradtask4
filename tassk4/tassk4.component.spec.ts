import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tassk4Component } from './tassk4.component';

describe('Tassk4Component', () => {
  let component: Tassk4Component;
  let fixture: ComponentFixture<Tassk4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Tassk4Component]
    });
    fixture = TestBed.createComponent(Tassk4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
