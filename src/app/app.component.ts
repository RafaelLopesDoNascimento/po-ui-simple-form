import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {
  PoMenuItem,
  PoMenuModule,
  PoPageModule,
  PoToolbarModule,  
} from '@po-ui/ng-components';
import { ParentsComponent } from './parents/parents.component';
// import { ModuleRouterModule } from './module-router/module-router.module';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    PoToolbarModule,
    PoMenuModule,
    PoPageModule,
    HttpClientModule,
    ParentsComponent,
  //  ModuleRouterModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', action: this.onClick.bind(this) },
    { label: 'Teste', link: 'test' },
    { label: 'Section', link: 'section'}
  ];

  clickOnButton() {
    alert("Hello there");
  }

  private onClick() {
    alert('Clicked in menu item');
  }
}
