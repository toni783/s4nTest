export class RepoModel {
    name: string;
    description: string;
    language: string;
    default_branch: string;
    git_url: string;

    constructor(
        name: string,
        description: string,
        language: string,
        default_branch: string,
        git_url: string
    ) {
        this.name = name;
        this.description = description;
        this.language = language;
        this.default_branch = default_branch;
        this.git_url = git_url;
    }
}
