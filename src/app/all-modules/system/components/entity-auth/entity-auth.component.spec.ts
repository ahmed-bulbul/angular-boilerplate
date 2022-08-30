import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityAuthComponent } from './entity-auth.component';

describe('EntityAuthComponent', () => {
  let component: EntityAuthComponent;
  let fixture: ComponentFixture<EntityAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntityAuthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
