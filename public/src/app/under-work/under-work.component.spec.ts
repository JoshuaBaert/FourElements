import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderWorkComponent } from './under-work.component';

describe('UnderWorkComponent', () => {
  let component: UnderWorkComponent;
  let fixture: ComponentFixture<UnderWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnderWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
