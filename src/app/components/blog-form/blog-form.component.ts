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
  constructor(private blogService: BlogService, private route: Router) {}

  ngOnInit(): void {}

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
    this.blogService.addNewBlog(this.newBlog).subscribe((data)=>{'Submited: ' + JSON.stringify(data)});
    this.route.navigate(['blog']);
  }
}
