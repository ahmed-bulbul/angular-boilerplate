import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemMenuCreateComponent } from './system-menu-create.component';

describe('SystemMenuCreateComponent', () => {
  let component: SystemMenuCreateComponent;
  let fixture: ComponentFixture<SystemMenuCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemMenuCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemMenuCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
