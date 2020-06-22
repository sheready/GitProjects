import { Component, OnInit } from '@angular/core';
import { GithubRequestService } from '../../app/github-http/github-request.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  property: any;

  constructor( private githubRequestService: GithubRequestService) {
    this.githubRequestService.githubInfo().subscribe(profile => {
      console.log(profile);
    });

   }

  ngOnInit(): void {
  }

}
