import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared-module/shared.module';
import { KeywordListComponent } from './keyword-list/keyword-list.component';
import { KeywordFormComponent } from './keyword-form/keyword-form.component';

@NgModule({
  declarations: [DashboardComponent,KeywordListComponent,KeywordFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
