import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestModuleSectionRoutingModule } from './test-module-section-routing.module';
import { TestModuleSectionComponent } from './test-module-section.component';
import { PoModule } from '@po-ui/ng-components';


@NgModule({
  declarations: [TestModuleSectionComponent],
  imports: [
    CommonModule,
    PoModule,
    TestModuleSectionRoutingModule,
  ]
})
export class TestModuleSectionModule { }
