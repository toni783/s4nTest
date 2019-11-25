import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';

import {
    catchError,
    debounceTime,
    distinctUntilChanged,
    tap,
    switchMap
} from 'rxjs/operators';
import { GithubService } from 'src/app/shared/services/github.service';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    todayDate = new Date();
    searching = false;
    searchFailed = false;
    totalItemsSearch = 1;
    gitUsersList;
    showSummary = false;
    isSubmmited = false;
    showAlert = false;

    gitForm = new FormGroup({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        personId: new FormControl('', Validators.required),
        createdAt: new FormControl('', Validators.required),
        email: new FormControl('', {
            validators: [
                Validators.email,
                Validators.required,
                Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
            ]
        }),
        gitUser: new FormControl('', {
            validators: [Validators.required]
        })
    });

    constructor(
        private githubService: GithubService,
        private cookieService: CookieService,
        private userService: UserService
    ) {}

    ngOnInit() {}

    search = (text$: Observable<string>) =>
        text$.pipe(
            debounceTime(300),
            distinctUntilChanged(),
            tap(() => (this.searching = true)),
            switchMap(term =>
                this.githubService.getUsersByUserName(term).pipe(
                    tap((value: []) => {
                        this.totalItemsSearch = value.length;
                        this.gitUsersList = value;
                        this.searchFailed = false;
                    }),
                    catchError(() => {
                        this.searchFailed = true;
                        return of([]);
                    })
                )
            ),
            tap(() => (this.searching = false))
        )

    formatter = (x: { login: string }) => x.login;

    selectGitUser() {
        if (this.gitUsersList) {
            this.gitForm.value.gitUser = this.gitUsersList[0];
        }
    }

    onShowSummary() {
        this.showSummary = !this.showSummary;
    }

    onSubmit() {
        this.gitForm.value.createdAt = new Date(
            this.gitForm.value.createdAt.year,
            this.gitForm.value.createdAt.month - 1,
            this.gitForm.value.createdAt.day
        );
        this.cookieService.set('user', JSON.stringify(this.gitForm.value));
        this.userService.setUser(this.gitForm.value);
        this.isSubmmited = true;
        this.showAlert = true;

        setTimeout(() => {
            this.showAlert = false;
        }, 3000);
        this.gitForm.reset();
    }
}
