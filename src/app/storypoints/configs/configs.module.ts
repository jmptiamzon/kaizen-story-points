import { NgModule, OnDestroy, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';
import { ConfigsComponent } from './configs.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ServerService } from '../server/server.service';

const configRoutes: Routes = [
  { path: 'configs', component: ConfigsComponent },
];

@NgModule({
  declarations: [
    ConfigsComponent,
  ],

  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    RouterModule.forChild(configRoutes),
  ],

  exports: [
    ConfigsComponent,
    RouterModule,
  ],
})
export class ConfigsModule { }
