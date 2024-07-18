import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestModuleRoutingModule } from './test-module-routing.module';
import { TestModuleComponent } from './test-module.component';
import { PoModule } from '@po-ui/ng-components';
import { TestFormComponent } from './test-form/test-form.component';


@NgModule({
  declarations: [TestModuleComponent, TestFormComponent],
  imports: [
    CommonModule,
    PoModule,
    TestModuleRoutingModule
  ]
})
export class TestModuleModule { }
