import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLeakParentComponentComponent } from './test-leak-parent-component.component';

describe('TestLeakParentComponentComponent', () => {
  let component: TestLeakParentComponentComponent;
  let fixture: ComponentFixture<TestLeakParentComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestLeakParentComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestLeakParentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
