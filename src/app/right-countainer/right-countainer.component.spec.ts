import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightCountainerComponent } from './right-countainer.component';

describe('RightCountainerComponent', () => {
  let component: RightCountainerComponent;
  let fixture: ComponentFixture<RightCountainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightCountainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightCountainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
