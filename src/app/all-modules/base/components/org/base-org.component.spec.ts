import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseOrgComponent } from './base-org.component';

describe('BaseOrgComponent', () => {
  let component: BaseOrgComponent;
  let fixture: ComponentFixture<BaseOrgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseOrgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
