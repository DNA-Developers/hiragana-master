import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseBottomComponent } from './showcase-bottom.component';

describe('ShowcaseBottomComponent', () => {
  let component: ShowcaseBottomComponent;
  let fixture: ComponentFixture<ShowcaseBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowcaseBottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcaseBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
