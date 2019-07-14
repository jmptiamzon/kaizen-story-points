import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { MatPaginatorModule, MatSortModule, MatTableModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import 'hammerjs';

const dashboardRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  declarations: [
    DashboardComponent
  ],

  imports: [
    CommonModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forChild(dashboardRoutes),
  ],

  exports: [
    DashboardComponent,
    RouterModule,
  ]
})
export class DashboardModule { }
