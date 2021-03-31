import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationSectionComponent } from './pagination-section.component';

describe('PaginationSectionComponent', () => {
  let component: PaginationSectionComponent;
  let fixture: ComponentFixture<PaginationSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
