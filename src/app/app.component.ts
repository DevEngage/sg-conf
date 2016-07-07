import { Component } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';

@Component({
  moduleId: module.id,
  selector: 'conf-app',
  templateUrl: 'app.component.html',
  directives: [ProfileComponent],
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = "Welcome to SG-CONF!  St George Utah's Technology Conference";
}
