import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserModel } from '../models/user.model';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private user = new BehaviorSubject(null);
    currentUser = this.user.asObservable();

    constructor() {}

    setUser(user: UserModel) {
        this.user.next(user);
    }

    getUserValue() {
        return this.user.value;
    }
}
