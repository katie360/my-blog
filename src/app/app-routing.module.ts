import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailComponent } from './blog-detail/blog-detail.component'; // ✅ adjust the path

const routes: Routes = [
  { path: 'blog/:slug', component: BlogDetailComponent }, // ✅ inside routes array
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
