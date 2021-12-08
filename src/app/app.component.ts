import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    data = {
        title: 'Test title'
    };
    courseTitle = 'Angular Core Deep Dive';
}
