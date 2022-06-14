import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from '../../models/blog';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  constructor(private _blogService: BlogService, private router: Router) {} // Init service
  ngOnInit(): void {
    this.getAllBLog()
  }
  blogs: Blog[] = [];
  selectedBlog?: Blog;
  status: string = '';
  getAllBLog(){
    this._blogService.getAllBLog().subscribe((data) => (this.blogs = data)); // Fetch all data from API using service
  }
  handleClickDetailBlog(blog: Blog) {
    this.selectedBlog = blog;
    this.router.navigate([`blog/${blog.id}`]);
  }

  deleteBlog(id: number) {
    console.log(id);
    if (confirm('Delete ?')) {
      this._blogService
        .deleteBlog(id)
        .subscribe(() => (this.status = 'Deleted success!'));
      this.getAllBLog()
    }
}}