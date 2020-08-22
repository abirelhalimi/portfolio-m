import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {error} from 'util';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private api = 'https://mailthis.to/abirelhalimi@gmail.com';

  constructor(private http: HttpClient) {
  }

  postMessage(input: any) {
    return this.http.post(this.api, input, {responseType: 'text'})
      .pipe(
        map(
          (response) => {
            if (response) {
              return response;
            }
          },
          // tslint:disable-next-line:no-shadowed-variable
          (error: any) => {
            return error;
          }
        )
      );
  }
}
