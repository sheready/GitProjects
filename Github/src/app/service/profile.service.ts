import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

 private username: string;
 private clientid = 'f6a8654e88b31dc03ef3 ';
 private clietsecret = '818df6e8ca7a0e305298762504a148fd033efff3';

  // tslint:disable-next-line: align
  constructor(private http: HttpClientModule) { }
}
