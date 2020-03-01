import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LotGridComponent } from './lot-grid.component';

describe('LotGridComponent', () => {
  let component: LotGridComponent;
  let fixture: ComponentFixture<LotGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LotGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LotGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
