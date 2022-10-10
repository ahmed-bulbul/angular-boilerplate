import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OuCreateComponent } from './ou-create.component';

describe('OuCreateComponent', () => {
  let component: OuCreateComponent;
  let fixture: ComponentFixture<OuCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OuCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OuCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
