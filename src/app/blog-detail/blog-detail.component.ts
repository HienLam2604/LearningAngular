import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BlogService} from '../blog.service'
import { Blog } from '../blog';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {

  constructor(private route:ActivatedRoute, private _blogService:BlogService) { }
 // @Input() blog?:Blog;
  blog?:Blog;
  ngOnInit(): void {
    this.loadBlogDetailPage()
  }
  loadBlogDetailPage(){
    let id:any = this.route.snapshot.paramMap.get('id'); //GET id from url /blog/:id
    if(id != null){
      this._blogService.getBlogById(parseInt(id)).subscribe(data=>{this.blog =data;console.log(data)});
      id = parseInt(id);
      console.log(id)
      console.log(typeof(id))
    }
    
  }
}
