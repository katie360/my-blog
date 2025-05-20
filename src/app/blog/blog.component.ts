import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScullyRoutesService, ScullyRoute } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated
})
export class BlogComponent implements OnInit {
  links$: Observable<ScullyRoute[]>;
  post: ScullyRoute | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private scully: ScullyRoutesService
  ) {
    this.links$ = this.scully.available$ as unknown as Observable<ScullyRoute[]>;
  }

  ngOnInit(): void {
    const currentRoute = this.router.url; // e.g. '/blog/my-post'

    this.links$.pipe(
      map((routes) =>
        routes.find(
          (p) => p.route === currentRoute && p.published !== false // ensure it’s published
        )
      )
    ).subscribe((matchedPost) => {
      this.post = matchedPost;
    });
  }
}
