import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastDivComponent } from './last-div.component';

describe('LastDivComponent', () => {
  let component: LastDivComponent;
  let fixture: ComponentFixture<LastDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastDivComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
