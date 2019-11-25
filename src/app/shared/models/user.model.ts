import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { GitUserModel } from './git-user.model';

export class UserModel {
    firstName: string;
    lastName: string;
    personId: string;
    email: string;
    createdAt: NgbDate;
    gitUser: GitUserModel;

    constructor(
        firstName: string,
        lastName: string,
        personId: string,
        email: string,
        createdAt: NgbDate,
        gitUser: GitUserModel
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.personId = personId;
        this.email = email;
        this.createdAt = createdAt;
        this.gitUser = gitUser;
    }
}
