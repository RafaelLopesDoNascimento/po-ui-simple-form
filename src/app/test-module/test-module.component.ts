import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-module',
  templateUrl: './test-module.component.html',
  styleUrl: './test-module.component.css'
})
export class TestModuleComponent {
  constructor(private router: Router) {

  }
  onClick() {
    console.log(this.router.navigate([ "test/form" ]))
  }
}
