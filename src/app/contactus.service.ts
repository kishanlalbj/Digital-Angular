import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class ContactusService {

  constructor(private _http:Http) { }

  public sendMail(details) {
  return this._http.post("http://localhost:4200/api/sendmail",details)
    .map((res:Response)=>res.json());
  }
}
