import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputNamePasswordEmailComponent } from './input-name-password-email.component';

describe('InputNamePasswordEmailComponent', () => {
  let component: InputNamePasswordEmailComponent;
  let fixture: ComponentFixture<InputNamePasswordEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputNamePasswordEmailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputNamePasswordEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
