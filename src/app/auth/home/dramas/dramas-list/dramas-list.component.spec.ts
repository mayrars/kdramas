import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DramasListComponent } from './dramas-list.component';

describe('DramasListComponent', () => {
  let component: DramasListComponent;
  let fixture: ComponentFixture<DramasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DramasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DramasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
