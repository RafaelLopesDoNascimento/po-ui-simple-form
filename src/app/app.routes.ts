import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  // {path: 'home', component: HomeComponent},
  // {path: 'login', component: LoginComponent},
  {path: 'test', loadChildren: ()=>import('./test-module/test-module.module').then(m => m.TestModuleModule)},
  {path: 'section', loadChildren: ()=>import('./test-module-section/test-module-section.module').then(m => m.TestModuleSectionModule)},
];

// export const routingTs: ModuleWithProviders<any> = RouterModule.forRoot(routes);