import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {BlogComponent} from './blog.component';
//import { BlogDetailComponent } from '../blog-detail/blog-detail.component';

const routes: Routes = [
  {
    path: ':slug',
    component: BlogComponent,
  },
   //{ path: ':slug', component: BlogDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}

