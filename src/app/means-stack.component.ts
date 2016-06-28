import { Component } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';

@Component({
  moduleId: module.id,
  selector: 'means-stack-app',
  templateUrl: 'means-stack.component.html',
  directives: [ProfileComponent],
  styleUrls: ['means-stack.component.css']
})
export class MeansStackAppComponent {
  title = "Welcome to SG-CONF!  St George Utah's Technology Conference";
}
