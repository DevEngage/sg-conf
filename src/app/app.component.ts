import { Component } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';


@Component({
  moduleId: module.id,
  selector: 'conf-app',
  templateUrl: 'app.component.html',
  directives: [HomeComponent],
  styleUrls: ['../assets/css/styles.css']
})
export class AppComponent {
  title = "Welcome to SG-CONF!  St George Utah's Technology Conference";
}
