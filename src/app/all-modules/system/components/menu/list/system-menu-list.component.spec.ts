import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemMenuListComponent } from './system-menu-list.component';

describe('SystemMenuListComponent', () => {
  let component: SystemMenuListComponent;
  let fixture: ComponentFixture<SystemMenuListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemMenuListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemMenuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
