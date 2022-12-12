import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElecDashboardComponent } from './elec-dashboard.component';

describe('ElecDashboardComponent', () => {
  let component: ElecDashboardComponent;
  let fixture: ComponentFixture<ElecDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElecDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElecDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
