import { Injectable } from '@angular/core';
import { EndpointService } from './endpoint.service';
import { map } from 'rxjs/operators';
import { RepoModel } from '../models/repo.model';

@Injectable({
    providedIn: 'root'
})
export class GithubService {
    constructor(private endpoint: EndpointService) {}

    getUsersByUserName(username) {
        return this.endpoint
            .get('search/users?q=' + username)
            .pipe(map((response: any) => response.items));
    }

    getUserRepos(username) {
        return this.endpoint.get(`users/${username}/repos`).pipe(
            map((response: any) => {
                return response.map(value => {
                    return new RepoModel(
                        value.name,
                        value.description,
                        value.language,
                        value.default_branch,
                        value.git_url
                    );
                });
            })
        );
    }
}
