import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntgeldatlasComponent } from './entgeldatlas.component';

describe('EntgeldatlasComponent', () => {
  let component: EntgeldatlasComponent;
  let fixture: ComponentFixture<EntgeldatlasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntgeldatlasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntgeldatlasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
