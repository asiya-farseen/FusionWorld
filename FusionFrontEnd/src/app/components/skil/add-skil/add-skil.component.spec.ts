import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSkilComponent } from './add-skil.component';

describe('AddSkilComponent', () => {
  let component: AddSkilComponent;
  let fixture: ComponentFixture<AddSkilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSkilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSkilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
