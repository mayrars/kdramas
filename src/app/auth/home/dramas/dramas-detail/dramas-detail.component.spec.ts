import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DramasDetailComponent } from './dramas-detail.component';

describe('DramasDetailComponent', () => {
  let component: DramasDetailComponent;
  let fixture: ComponentFixture<DramasDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DramasDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DramasDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
