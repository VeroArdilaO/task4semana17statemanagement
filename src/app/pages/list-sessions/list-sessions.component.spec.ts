import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSessionsComponent } from './list-sessions.component';

describe('ListSessionsComponent', () => {
  let component: ListSessionsComponent;
  let fixture: ComponentFixture<ListSessionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSessionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
