import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { EnvironmentConst } from 'src/environments/environment.const';

@Injectable({
    providedIn: 'root'
})
export class EndpointService {
    constructor(private httpClient: HttpClient) {}
    get(endpoint: string, params?: any, requestOpts?: any) {
        if (!requestOpts) {
            requestOpts = {
                params: new HttpParams()
            };
        }
        if (params) {
            requestOpts.params = new HttpParams();
            for (const k of params) {
                requestOpts.params = requestOpts.params.set(k, params[k]);
            }
        }

        return this.httpClient.get(
            EnvironmentConst.local + '/' + endpoint,
            requestOpts
        );
    }

    post(endpoint: string, body: any, requestOpts?: any) {
        return this.httpClient.post(
            EnvironmentConst.local + '/' + endpoint,
            body,
            requestOpts
        );
    }

    put(endpoint: string, body: any, requestOpts?: any) {
        return this.httpClient.put(
            EnvironmentConst.local + '/' + endpoint,
            body,
            requestOpts
        );
    }

    delete(endpoint: string, requestOpts?: any) {
        return this.httpClient.delete(
            EnvironmentConst.local + '/' + endpoint,
            requestOpts
        );
    }

    patch(endpoint: string, body: any, requestOpts?: any) {
        return this.httpClient.patch(
            EnvironmentConst.local + '/' + endpoint,
            body,
            requestOpts
        );
    }
}
