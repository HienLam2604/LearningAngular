import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BlogService } from '../../services/blog.service';
import { Blog } from '../../models/blog';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss'],
})
export class BlogDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private _blogService: BlogService
  ) {}
  blog?: Blog;
  ngOnInit(): void {
    this.loadBlogDetailPage();
  }
  loadBlogDetailPage() {
    let id: any = this.route.snapshot.paramMap.get('id'); //GET id from url /blog/:id
    if (id != null) {
      this._blogService.getBlogById(parseInt(id)).subscribe((data) => {
        this.blog = data;
      });
    }
  }
}
