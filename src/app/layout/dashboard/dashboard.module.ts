import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    NgbCarouselModule,
    NgbAlertModule,
    NgbDatepickerModule,
    NgbTypeaheadModule
} from '@ng-bootstrap/ng-bootstrap';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

import { StatModule } from '../../shared';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        NgbCarouselModule,
        NgbAlertModule,
        NgbDatepickerModule,
        NgbTypeaheadModule,
        NgbAlertModule,
        DashboardRoutingModule,
        StatModule
    ],
    declarations: [DashboardComponent]
})
export class DashboardModule {}
