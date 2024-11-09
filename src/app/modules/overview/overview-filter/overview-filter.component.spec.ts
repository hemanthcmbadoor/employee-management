import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewFilterComponent } from './overview-filter.component';

describe('OverviewFilterComponent', () => {
  let component: OverviewFilterComponent;
  let fixture: ComponentFixture<OverviewFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverviewFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverviewFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
