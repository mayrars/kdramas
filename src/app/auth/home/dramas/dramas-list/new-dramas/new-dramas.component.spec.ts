import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDramasComponent } from './new-dramas.component';

describe('NewDramasComponent', () => {
  let component: NewDramasComponent;
  let fixture: ComponentFixture<NewDramasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDramasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDramasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
