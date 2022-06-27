import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogComponent } from '../blog/blog.component';
@Component({
  selector: 'app-pagination-controls',
  templateUrl: './pagination-controls.component.html',
  styleUrls: ['./pagination-controls.component.scss'],
})
export class PaginationControlsComponent implements OnInit {
  constructor(private router: Router, private activeRoute: ActivatedRoute) {}
  @Input() totalPage: any;
  @Input() totalPageLength: any;
  @Input() currentPage: number = 0;
  @Input() parentApi?: BlogComponent;
  @Output() getAllBLog: EventEmitter<any> = new EventEmitter<any>();
  ngOnInit(): void {
    this.currentPage = 1;
  }
  nextPage() {
    let tmp = this.currentPage + 1;
    this.router.navigate(['/blog'], {
      queryParams: { page: tmp },
    });
    this.currentPage++;
    this.updateCurrentPage();
  }
  prevPage() {
    let tmp = this.currentPage - 1;
    this.router.navigate(['/blog'], {
      queryParams: { page: tmp },
    });
    this.currentPage--;
    this.updateCurrentPage();
  }
  selectedPage(i: number) {
    this.router.navigate(['/blog'], {
      queryParams: { page: i + 1 },
    });
    this.currentPage = i + 1;
    this.updateCurrentPage();
  }
  updateCurrentPage() {
    this.getAllBLog.emit(this.currentPage);
  }
}
