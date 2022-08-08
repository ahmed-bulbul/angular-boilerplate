import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestAuthEditComponent } from './request-auth-edit.component';

describe('RequestAuthEditComponent', () => {
  let component: RequestAuthEditComponent;
  let fixture: ComponentFixture<RequestAuthEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestAuthEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestAuthEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
