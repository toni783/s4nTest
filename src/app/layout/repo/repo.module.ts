import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepoComponent } from './repo.component';
import { RepoRoutingModule } from './repo-routing.module';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
@NgModule({
    declarations: [RepoComponent],
    imports: [CommonModule, TableModule, InputTextModule, RepoRoutingModule]
})
export class RepoModule {}
