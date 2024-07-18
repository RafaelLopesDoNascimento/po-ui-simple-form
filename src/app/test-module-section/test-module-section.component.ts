import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-module-section',
  templateUrl: './test-module-section.component.html',
  styleUrl: './test-module-section.component.css'
})
export class TestModuleSectionComponent {
  constructor(private router: Router) {

  }
}
