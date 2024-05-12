import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCompComponentsComponent } from './new-comp-components.component';

describe('NewCompComponentsComponent', () => {
  let component: NewCompComponentsComponent;
  let fixture: ComponentFixture<NewCompComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewCompComponentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewCompComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
