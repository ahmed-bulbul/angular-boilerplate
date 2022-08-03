import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestAuthCreateComponent } from './request-auth-create.component';

describe('RequestAuthCreateComponent', () => {
  let component: RequestAuthCreateComponent;
  let fixture: ComponentFixture<RequestAuthCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestAuthCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestAuthCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
