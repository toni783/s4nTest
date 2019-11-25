import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';
import { GithubService } from 'src/app/shared/services/github.service';
import { UserService } from 'src/app/shared/services/user.service';
import { UserModel } from 'src/app/shared/models/user.model';
import { RepoModel } from 'src/app/shared/models/repo.model';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-repo',
    templateUrl: './repo.component.html',
    styleUrls: ['./repo.component.scss'],
    animations: [routerTransition()]
})
export class RepoComponent implements OnInit {
    cols = [
        { field: 'name', header: 'Name' },
        { field: 'description', header: 'Description' },
        { field: 'language', header: 'Language' },
        { field: 'default_branch', header: 'Default Branch' },
        { field: 'git_url', header: 'Git URL' }
    ];

    currentUser: UserModel;
    repoList$: Observable<RepoModel[]>;

    constructor(
        private githubService: GithubService,
        private userService: UserService
    ) {}

    ngOnInit() {
        this.currentUser = this.userService.getUserValue();
        this.repoList$ = this.githubService.getUserRepos(
            this.currentUser.gitUser.login
        );
    }

    goToWindow(url) {
        window.open(url);
    }
}
