import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { BlogListComponent } from './blog-list/blog-list.component';

const routes: Routes = [
    {
    path: 'blog/:slug',
    component: BlogComponent
  },
   { path: 'blog-detail', component: BlogDetailComponent },
   { path: 'blog', component: BlogListComponent },
   { path: '', component: HomeComponent },
   { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
