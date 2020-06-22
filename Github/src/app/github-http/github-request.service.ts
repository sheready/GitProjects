import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Github } from '../github-class/github';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GithubRequestService {
  [x: string]: any;
      github: Github;
      name: any;
  constructor(private http: HttpClient) {
    this.name = 'sheready';
    this.github = new Github('', '', '', '', '');
   }
   githubRequest(){
     interface ApiResponse{
       [x: string]: any;
       name: string;
       bio: string;
       repos_url: string;
       avatar_url: string;
       url: string;

}

     // tslint:disable-next-line: prefer-const
     let promise = new Promise((resolve, reject) => {
        this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response => {
          this.name.name = response.name;
          this.bio.bio = response.bio;
          this.html_url.html_url = response.html_url;
          this.avatar_url.avatar_url = response.avatar_url;
          this.url.url = response.url;
          resolve();
        },

        // tslint:disable-next-line: no-shadowed-variable
        error => {
          this.name.name = 'Try again';
          this.bio.bio = 'try again';
          this.repos_url = 'https://github.com/';

          reject(error);
        });

        });
     return promise;

   }
}
