import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from './shared/services/user.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(
        private cookieService: CookieService,
        private userService: UserService
    ) {}

    ngOnInit() {
        if (this.cookieService.get('user')) {
            this.userService.setUser(
                JSON.parse(this.cookieService.get('user'))
            );
        }
    }
}
