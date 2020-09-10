import { Component, OnInit } from '@angular/core';
import { HerokuService } from './heroku.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'frontApp';
  courses: any[] = [];

  constructor(private courseService: HerokuService){  }

  ngOnInit(){
    this.courseService.getCursos().subscribe(
      (data) => {
        this.courses = data['content'];
      },
      (error) => {
        console.error(error);
      }
    )
  }
}
