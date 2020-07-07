import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { I4javaComponent } from './i4java.component';

describe('I4javaComponent', () => {
  let component: I4javaComponent;
  let fixture: ComponentFixture<I4javaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ I4javaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(I4javaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
