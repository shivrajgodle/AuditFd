import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProComponent } from './my-pro.component';

describe('MyProComponent', () => {
  let component: MyProComponent;
  let fixture: ComponentFixture<MyProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyProComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
