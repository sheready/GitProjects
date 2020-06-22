import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Github } from '../github-class/github';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  github: Github;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    interface ApiResponse {
       name: string;
       bio: string;
       html_url: string;
       avatar_url: string;
       url: string;


    }
    // tslint:disable-next-line: max-line-length
    this.http.get<ApiResponse>('https://api.github.com/users/sheready?access_token=d04d0625c7bf7e0d44f944b27902329f57930b33').subscribe(data => {
      this.github = new Github (data.name, data.bio, data.html_url, data.avatar_url, data.url);
    });
  }

}
