import { Component } from '@angular/core';
import { faCarrot } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'bri turner';
  faCamera = faCarrot;
} 
