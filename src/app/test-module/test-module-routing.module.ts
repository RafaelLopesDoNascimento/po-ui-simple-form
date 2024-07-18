import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestModuleComponent } from './test-module.component';
import { TestFormComponent } from './test-form/test-form.component';

const routes: Routes = [
  {path: '', component: TestModuleComponent},
  {path: 'form', component: TestFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestModuleRoutingModule {

 }
