import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDramaDetailComponent } from './modal-drama-detail.component';

describe('ModalDramaDetailComponent', () => {
  let component: ModalDramaDetailComponent;
  let fixture: ComponentFixture<ModalDramaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDramaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDramaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
