import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ConfigsComponent } from './configs.component';

const configRoutes: Routes = [
  { path: 'configs', component: ConfigsComponent },
];

@NgModule({
  declarations: [
    ConfigsComponent,
  ],

  imports: [
    CommonModule,
    RouterModule.forChild(configRoutes),
  ],

  exports: [
    RouterModule,
  ],
})
export class ConfigsModule { }
