import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Blog } from '../../models/blog';
import { BlogService } from '../../services/blog.service';
import { PaginationControlsComponent } from '../pagination-controls/pagination-controls.component';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  constructor(
    private _blogService: BlogService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.getAllBLog(this.currentPage);
  }
  params: any = {};
  totalPage: any;
  totalPageLength: number = 0;
  blogs: Blog[] = [];
  currentPage: any = 0;
  currentPage1: any = 0;
  numberOfBlogs: any = 10;

  getRequestParams(search: String, page: number, pageSize: number): any {
    if (search) {
      this.params[`title`] = search;
    }
    if (page) {
      this.params[`page`] = page - 1; // array start at 0
    }
    if (pageSize) {
      this.params[`size`] = pageSize;
    }
    return this.params;
  }
  async getAllBLog(currentPage: any) {
    currentPage = this.activatedRoute.snapshot.queryParamMap.get('page');
    this.numberOfBlogs = this.activatedRoute.snapshot.queryParamMap.get('size');
    this.params = this.getRequestParams(
      '',
      parseInt(currentPage),
      this.numberOfBlogs
    );
    let api = await this._blogService.getAllBLog(this.params);
    let data1 = await api.toPromise().then((data) => {
      this.totalPage = new Array(data.totalPages);
      this.totalPageLength = data.totalPages;
      this.currentPage1 = data.number + 1;
      this.blogs = data.content;
      console.log(data);
    });
    return data1;
  }
  handleClickDetailBlog(blog: Blog) {
    this.router.navigate([`blog/${blog.id}`]);
  }

  deleteBlog(id: number) {
    if (confirm('Delete ?')) {
      this._blogService.deleteBlog(id).subscribe();
      this.getAllBLog(this.currentPage);
    }
  }
}
