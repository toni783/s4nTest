import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild } from '@angular/router';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable()
export class RepoGuard implements CanActivate {
    constructor(private router: Router, private userService: UserService) {}

    canActivate() {
        if (this.userService.getUserValue()) {
            return true;
        }

        this.router.navigate(['/dashboard']);
        return false;
    }
}
