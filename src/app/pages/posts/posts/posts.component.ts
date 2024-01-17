import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent implements OnInit {
  posts: Array<any> = [];

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    try {
      this.getPostData();
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }

  getPostData(): void {
    this.http.get<any[]>('assets/posts/test.json').subscribe(data => {
      this.posts = data;
    });
  }
}
