import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  /* posts = [
    {title: '1stPost', content: '1st post content'},
    {title: '2ndPost', content: '2nd post content'},
    {title: '3rdPost', content: '3rd post content'},
  ]; */

@Input() posts = [];
}
