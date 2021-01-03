import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLeakChildComponent } from './test-leak-child.component';

describe('TestLeakChildComponent', () => {
  let component: TestLeakChildComponent;
  let fixture: ComponentFixture<TestLeakChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestLeakChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestLeakChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
