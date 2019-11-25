import { environment } from './environment';

export class EnvironmentConst {
    // local url for developers
    public static local = 'https://api.github.com';

    // production url for development, url to be used
    public static production = 'https://api.github.com';

    public static ENDPOINT = !environment.production
        ? EnvironmentConst.local
        : EnvironmentConst.production;
}
