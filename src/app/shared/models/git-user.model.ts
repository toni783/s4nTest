export class GitUserModel {
    avatar_url: string;
    login: string;
    html_url: string;

    constructor(avatar_url: string, login: string, html_url: string) {
        this.avatar_url = avatar_url;
        this.login = login;
        this.html_url = html_url;
    }
}
