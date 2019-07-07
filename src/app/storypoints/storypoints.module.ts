import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FooterModule } from './footer/footer.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ServerService } from './server/server.service';
import { ConfigsModule } from './configs/configs.module';
import { ProjectsModule } from './projects/projects.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    FooterModule,
    DashboardModule,
    ConfigsModule,
    ProjectsModule,
  ],

  exports: [
    FooterModule,
    DashboardModule,
    ConfigsModule,
    ProjectsModule,
  ],

  providers: [
    ServerService,
  ],
})
export class StorypointsModule { }
