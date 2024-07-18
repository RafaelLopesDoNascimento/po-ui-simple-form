import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestModuleSectionComponent } from './test-module-section.component';

const routes: Routes = [
  {path: '', component: TestModuleSectionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestModuleSectionRoutingModule { }
