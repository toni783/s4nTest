import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepoComponent } from './repo.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: RepoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RepoRoutingModule {}
