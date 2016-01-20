import { Inject } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs';

export abstract class BaseDataService {
    private _http: Http;
    constructor(http: Http) {
        this._http = http;
    }

    protected getObject<T>(url: string): Promise<T> {
      return this.get(url)
                 .then(response => response.json());
    }

    protected getString(url: string): Promise<string> {
      return this.get(url)
                 .then(response => response.text());
    }

    private get(url: string): Promise<Response> {
      return new Promise((resolve, reject) => {
        this._http.get(url)
          .subscribe(response => resolve(response),
                     error => this.handleError(error, reject));
      });
    }

    private handleError(error: Response, reject: Function) {
      console.error(error);
      reject(error);
    }
}