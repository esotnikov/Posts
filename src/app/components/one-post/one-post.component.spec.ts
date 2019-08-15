/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OnePostComponent } from './one-post.component';

describe('OnePostComponent', () => {
  let component: OnePostComponent;
  let fixture: ComponentFixture<OnePostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnePostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
