import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()

export class AppService {

  constructor(private http: Http) {}

  handleResponse(res: Response): any {
    let body = res.json() || {};
    return body;
  }

  handleError(error: Response | any) {
    console.log('error', error);
    return error;
  }

  httpGet(url: string): Observable<any> {
    return this.http
                   .get(url, {})
                   .map(this.handleResponse.bind(this))
                   .catch(this.handleError);
  }

  getPriceList() {
    return this.httpGet('./ssl.json');
  }



  public getDescription(id: string) {
    return this.httpGetDesc('./ssl.json', id);
  }

  private httpGetDesc(url: string, id: string) {
    let args = new RequestOptions({params: {id: id}});
    return this.http.get(url, args)
      .map(this.handleResponse.bind(this))
      .catch(this.handleError);
  }
}

