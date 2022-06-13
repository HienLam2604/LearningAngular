import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from '../../models/blog';
import { BlogService } from '../../services/blog.service';

//import * as data from '../mock-blog-data.json'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  constructor(private _blogService: BlogService, private router: Router) {} // Init service
  ngOnInit(): void {
    this._blogService.getAllBLog().subscribe((data) => (this.blogs = data)); // Fetch all data from API using service

    this._blogService.getAllProduct().subscribe((data) => console.log(data)); // Java Spring - Rest API
  }
  blogs: Blog[] = [];
  selectedBlog?: Blog;

  handleClickDetailBlog(blog: Blog) {
    this.selectedBlog = blog;
    this.router.navigate([`blog/${blog.id}`]);
  }
}
