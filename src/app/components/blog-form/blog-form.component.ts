import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from '../../models/blog';
import { BlogService } from '../../services/blog.service';
@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss'],
})
export class BlogFormComponent implements OnInit {
  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogService.getAllBLog().subscribe((data) => (this.blogs = data));
  }

  blogs: Blog[] = [];
  newBlog?: Blog;
  addBlog(result: Blog) {
    let date = new Date();
    let randomNumber: number = Math.floor(Math.random() * 100) + 1; // Random number 1 -> 100
    this.newBlog = {
      id: randomNumber,
      title: result.title,
      content: result.content,
      like: randomNumber,
      dislike: randomNumber,
      dateUpload: `${
        date.getMonth() + 1
      }/${date.getDate()}/${date.getFullYear()}`,
    };
    this.blogs = [this.newBlog, ...this.blogs];
    console.log('Submited: ' + JSON.stringify(this.newBlog));
  }
}
