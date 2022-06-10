import { Component, OnInit } from '@angular/core';
import { BlogService } from '../service/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  listBlog: any;
  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.getAll().subscribe((data: any) => {
      this.listBlog = data;
    })
  }

}
