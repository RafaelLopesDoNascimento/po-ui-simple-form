import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestModuleSectionComponent } from './test-module-section.component';

describe('TestModuleSectionComponent', () => {
  let component: TestModuleSectionComponent;
  let fixture: ComponentFixture<TestModuleSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestModuleSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestModuleSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
