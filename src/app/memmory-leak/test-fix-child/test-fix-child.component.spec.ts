import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFixChildComponent } from './test-fix-child.component';

describe('TestFixChildComponent', () => {
  let component: TestFixChildComponent;
  let fixture: ComponentFixture<TestFixChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestFixChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestFixChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
