import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Showcase2Component } from './showcase2.component';

describe('Showcase2Component', () => {
  let component: Showcase2Component;
  let fixture: ComponentFixture<Showcase2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Showcase2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Showcase2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
