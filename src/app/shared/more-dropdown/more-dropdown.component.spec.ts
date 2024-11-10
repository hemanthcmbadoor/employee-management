import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreDropdownComponent } from './more-dropdown.component';

describe('MoreDropdownComponent', () => {
  let component: MoreDropdownComponent;
  let fixture: ComponentFixture<MoreDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoreDropdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
