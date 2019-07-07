import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { ServerService } from '../server/server.service';

const projectsRoutes: Routes = [
  { path: 'projects', component: ProjectsComponent },
];

@NgModule({
  declarations: [
    ProjectsComponent,
  ],

  imports: [
    CommonModule,
    RouterModule.forChild(projectsRoutes),
  ],

  exports: [
    RouterModule,
  ]


})
export class ProjectsModule { }
