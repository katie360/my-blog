import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { ServicesComponent } from './services/services.component';


@NgModule({
  declarations: [
    AppComponent,
    BlogDetailComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    BlogListComponent,
    ServicesComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
    exports: [
    HeaderComponent,
    FooterComponent,
    BlogListComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
