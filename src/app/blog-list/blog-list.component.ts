import { Component, OnInit } from '@angular/core';
import { ScullyRoutesService, ScullyRoute } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

   links$: Observable<ScullyRoute[]>;

    constructor(private scully: ScullyRoutesService) {
      // 👇 Type assertion avoids TS 2739 error safely
        this.links$ = this.scully.available$ as unknown as Observable<ScullyRoute[]>;
    }

    ngOnInit(): void {
      this.links$.subscribe((links) => {
        console.log('Available routes:', links);
      });
    }

}
