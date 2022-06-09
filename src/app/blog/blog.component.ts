import { BlogService } from '../blog.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Blog} from '../blog'
import { Blogs } from '../mock-blog-data'; //static local data
//import * as data from '../mock-blog-data.json'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  
  constructor(private route:ActivatedRoute, private _blogService:BlogService) {  }
  ngOnInit(): void {
    this._blogService.getAllBLog().subscribe(data=>this.blogs=data); // Fetch data from API
  }
  blogs:Blog[] = [];
  selectedBlog?:Blog;

  handleClickDetailBlog(blog:Blog){
    this.selectedBlog = blog;
    console.log(blog)
  }

}
